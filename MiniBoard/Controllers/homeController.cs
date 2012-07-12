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
       
      public ActionResult Index()
      {
         return View(db);
      }

      public PartialViewResult showPeople()
      {
         return PartialView(db.Person.ToList());
      }

      public PartialViewResult showProjects()
      {
         return PartialView(db.Person.ToList());
      }
    }
}
