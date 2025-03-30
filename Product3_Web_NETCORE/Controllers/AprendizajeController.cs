using Microsoft.AspNetCore.Mvc;

namespace Product3_Web_NETCORE.Controllers
{
    public class AprendizajeController : Controller
    {
        public IActionResult Arrays()
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString("Usuario")))
            {
                // Guarda la ruta para volver después del login
                return RedirectToAction("Index", "Login", new { returnUrl = "/Aprendizaje/Arrays" });
            }

            return View();
        }

        public IActionResult List()
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString("Usuario")))
            {
                return RedirectToAction("Index", "Login", new { returnUrl = "/Aprendizaje/List" });
            }

            return View();
        }


    }
}
