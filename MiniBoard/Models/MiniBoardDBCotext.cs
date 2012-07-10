using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MiniBoard.Models
{
   public class MiniBoardDBCotext : DbContext
   {
      public DbSet<Person> Person { get; set; }
   }
}