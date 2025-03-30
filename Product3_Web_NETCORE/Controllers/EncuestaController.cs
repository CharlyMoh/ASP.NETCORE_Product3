using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

public class EncuestaController : Controller
{
    private readonly AppDbContext _context;

    public EncuestaController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Index(string tema)
    {
        // Asegura que solo usuarios logueados puedan acceder
        if (string.IsNullOrEmpty(HttpContext.Session.GetString("UsuarioId")))
            return RedirectToAction("Index", "Login");

        var encuesta = new Encuesta { Tema = tema };

        return View(encuesta);
    }

    [HttpPost]
    public IActionResult Index(string tema, string[] respuestas)
    {
        if (string.IsNullOrEmpty(HttpContext.Session.GetString("UsuarioId")))
            return RedirectToAction("Index", "Login");

        try
        {
            // 1. Guardar la encuesta
            var encuesta = new Encuesta
            {
                UsuarioId = Convert.ToInt32(HttpContext.Session.GetString("UsuarioId")),
                Tema = tema,
                Fecha = DateTime.Now
            };
            _context.Encuestas.Add(encuesta);
            _context.SaveChanges();

            // 2. Guardar las respuestas
            for (int i = 0; i < respuestas.Length; i++)
            {
                var respuesta = new Respuesta
                {
                    EncuestaId = encuesta.Id,
                    PreguntaNumero = i + 1,
                    RespuestaSeleccionada = respuestas[i]
                };
                _context.Respuestas.Add(respuesta);
            }

            _context.SaveChanges();

            return RedirectToAction("Gracias");
        }
        catch (Exception)
        {
            ViewBag.ErrorMessage = "Ocurrió un error al guardar las respuestas.";
            return View();
        }
    }



    public IActionResult Gracias()
    {
        return View();
    }

}
