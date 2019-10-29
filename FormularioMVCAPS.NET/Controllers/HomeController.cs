
using FormularioMVCAPS.NET.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace FormularioMVCAPS.NET.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public string SavePerson(Persona persona) {
            try
            {
                var modelPerson = new List<Persona>();
                modelPerson.Add(persona);

                return JsonConvert.SerializeObject(modelPerson); 
            }
            catch (Exception e) {
                throw new Exception(e.Message);
            }

        }

    }
}