using System;
using System.Linq;
using System.Data.Entity;

namespace MiniBoard.Models
{
   public class Person
   {
      public int personID { get; set; }
      public string name { get; set; }
   }

   public class MiniBoardDBCotext : DbContext
   {
      public DbSet<Person> Person { get; set; }
   }
}