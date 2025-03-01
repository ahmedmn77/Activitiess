﻿using Domain;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest
        {
            public Activity Activity{ get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _dataContext;

            public Handler(DataContext dataContext)
            {
                _dataContext = dataContext;
            }

            public Task Handle(Command request, CancellationToken cancellationToken)
            {
                _dataContext.Add(request.Activity);
                _dataContext.SaveChanges();
                return Task.CompletedTask;
            }
        }

    }
}
