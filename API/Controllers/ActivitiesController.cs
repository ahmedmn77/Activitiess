using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Application;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.Activities;

namespace API.Controllers
{
    public class ActivitiesController: BaseController
    {
        [HttpGet] //api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await Mediator.Send(new List.Query()); 
        }

        [HttpGet("{id}")] //api/activities/sdsd4454sd
        public async Task<ActionResult<Activity>> GetActivity (Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }
    }
}
