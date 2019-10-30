
using FormularioMVCAPS.NET.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace FormularioMVCAPS.NET.Controllers
{
    public class HomeController : Controller
    {
        List<Persona> modelPerson = null;

        public ActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public string SavePerson(Persona persona)
        {
            try
            {
                modelPerson.Add(persona);

                return JsonConvert.SerializeObject(modelPerson);
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }

        }

    }
}