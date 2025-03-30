using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Linq;

public class LoginController : Controller
{
    private readonly AppDbContext _context;

    public LoginController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Index()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Index(string nombreUsuario, string contrasena, string? returnUrl)
    {
        var usuario = _context.Usuarios
            .FirstOrDefault(u => u.NombreUsuario == nombreUsuario && u.Contrasena == contrasena);

        if (usuario != null)
        {
            HttpContext.Session.SetString("Usuario", usuario.NombreUsuario);
            HttpContext.Session.SetString("UsuarioId", usuario.Id.ToString());

            // Si returnUrl viene con valor, redirige ahí después del login
            if (!string.IsNullOrEmpty(returnUrl))
                return Redirect(returnUrl);

            return RedirectToAction("Index", "Home");
        }

        ViewBag.Error = "✘ Usuario o contraseña incorrectos.";
        return View();
    }


    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index", "Login");
    }

}
