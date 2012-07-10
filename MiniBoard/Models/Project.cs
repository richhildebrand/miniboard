using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MiniBoard.Models
{
   public class Project
   {
      public int ProjectID { get; set; }
      public int ProjectName { get; set; }
      public List<Person> TeamLeads { get; set; }
      public List<Person> TeamMembers { get; set; }
   }
}