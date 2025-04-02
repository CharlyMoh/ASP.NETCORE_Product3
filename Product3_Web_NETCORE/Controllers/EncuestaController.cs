using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Product3_Web_NETCORE.Models;

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
        ViewData["Title"] = "Encuesta de " + tema;
        var preguntas = EncuestaPreguntas.ObtenerPreguntas(tema);
        ViewBag.Preguntas = preguntas;

        if (tema == "Listas")
            return View("IndexListas", new Encuesta { Tema = tema });

        return View("Index", new Encuesta { Tema = tema });
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
