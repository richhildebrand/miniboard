using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using MiniBoard.Models;

namespace MiniBoard.Controllers
{
    public class ProjectController : ApiController
    {
        private MiniBoardDBCotext db = new MiniBoardDBCotext();

        // GET api/Project
        public IEnumerable<Project> GetProjects()
        {
            return db.Project.AsEnumerable();
        }

        // GET api/Project/5
        public Project GetProject(int id)
        {
            Project project = db.Project.Find(id);
            if (project == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return project;
        }

        // PUT api/Project/5
        public HttpResponseMessage PutProject(int id, Project project)
        {
            if (ModelState.IsValid && id == project.ProjectID)
            {
                db.Entry(project).State = EntityState.Modified;

                try
                {
                    db.SaveChanges();
                }
                catch (DbUpdateConcurrencyException)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }

                return Request.CreateResponse(HttpStatusCode.OK, project);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        // POST api/Project
        public HttpResponseMessage PostProject(Project project)
        {
            if (ModelState.IsValid)
            {
                db.Project.Add(project);
                db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, project);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = project.ProjectID }));
                return response;
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        // DELETE api/Project/5
        public HttpResponseMessage DeleteProject(int id)
        {
            Project project = db.Project.Find(id);
            if (project == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.Project.Remove(project);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            return Request.CreateResponse(HttpStatusCode.OK, project);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}