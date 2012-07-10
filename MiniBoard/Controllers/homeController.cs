using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MiniBoard.Models;

namespace MiniBoard.Controllers
{

    public class homeController : Controller
    {
       private MiniBoardDBCotext db = new MiniBoardDBCotext();
       
       // GET: /home/

        public ActionResult Index()
        {
           return View(db.Person.ToList());
        }
    }
}
