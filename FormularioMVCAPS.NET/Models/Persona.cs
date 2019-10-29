using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FormularioMVCAPS.NET.Models
{
    public class Persona
    {
        public string Name { get; set; }
        public string LastName { get; set; }

        public int Document { get; set; }
        public string Email { get; set; }
        public string Profetion { get; set; }
        public string BirthDate { get; set; }

    }
}