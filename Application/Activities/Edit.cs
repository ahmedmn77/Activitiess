﻿using AutoMapper;
using Azure.Core;
using Domain;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _dataContext;
            private readonly IMapper _mapper;

            public Handler(DataContext dataContext,IMapper mapper)
            {
                _dataContext = dataContext;
                _mapper = mapper;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _dataContext.Activities.FindAsync(request.Activity.Id);
                _mapper.Map(request.Activity, activity);                

                await _dataContext.SaveChangesAsync();
            }
        }
    }
}
