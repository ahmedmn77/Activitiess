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
        private readonly IMediator _mediator;

        public ActivitiesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet] //api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await _mediator.Send(new List.Query()); 
        }

        [HttpGet("{id}")] //api/activities/sdsd4454sd
        public async Task<ActionResult<Activity>> GetActivity (Guid id)
        {
            return Ok();
        }
    }
}
