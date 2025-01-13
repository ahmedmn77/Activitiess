using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using Domain;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence
{
    public class Seed
    {
        public static Task SeedDataAsync(DataContext dataContext)
        {
            if (dataContext.Activities.Any())
                return Task.CompletedTask;
            var activities = new List<Domain.Activity>
            {
                new() {
                    Title = "Past activity 1",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "Activity 2 month ago",
                    Category = "drinks",
                    City = "London",
                    Venue = "Pub",
                },
                new() {
                    Title = "Past activity 2",
                    Date = DateTime.UtcNow.AddMonths(-1),
                    Description = "Activity 1 month ago",
                    Category = "culture",
                    City = "Paris",
                    Venue = "Louvre",
                },
                new() {
                    Title = "future activity 1",
                    Date = DateTime.UtcNow.AddMonths(1),
                    Description = "Activity 1 month in the future",
                    Category = "culture",
                    City = "London",
                    Venue = "Naturam History Museum",
                },
                new() {
                    Title = "future activity 2",
                    Date = DateTime.UtcNow.AddMonths(2),
                    Description = "Activity 2 month in the future",
                    Category = "music",
                    City = "London",
                    Venue = "02 Arena",
                },
                new() {
                    Title = "future activity 3",
                    Date = DateTime.UtcNow.AddMonths(3),
                    Description = "Activity 3 month in the future",
                    Category = "drinks",
                    City = "London",
                    Venue = "Another Pub",
                },
                new() {
                    Title = "Future activity 4",
                    Date = DateTime.UtcNow.AddMonths(4),
                    Description = "Activity 4 month in the future",
                    Category = "drinks",
                    City = "London",
                    Venue = "Yet another Pub",
                },
                new() {
                    Title = "Future activity 5",
                    Date = DateTime.UtcNow.AddMonths(5),
                    Description = "Activity 5 month in the future",
                    Category = "drinks",
                    City = "London",
                    Venue = "Just another Pub",
                },
                new() {
                    Title = "Future activity 6",
                    Date = DateTime.UtcNow.AddMonths(6),
                    Description = "Activity 6 month IN THE FUTRE",
                    Category = "drinks",
                    City = "Music",
                    Venue = "Roundhouse Camden",
                },
                new() {
                    Title = "Past activity 7",
                    Date = DateTime.UtcNow.AddMonths(7),
                    Description = "Activity 7 month in the future",
                    Category = "Travel",
                    City = "London",
                    Venue = "Somewhere in the Thames",
                },
                 new() {
                    Title = "Past activity 8",
                    Date = DateTime.UtcNow.AddMonths(8),
                    Description = "Activity 8 month in the future",
                    Category = "film",
                    City = "London",
                    Venue = "Cinema",
                }

            };

            dataContext.Activities.AddRange(activities);
            dataContext.SaveChanges();
            return Task.CompletedTask;
        }
    }
}
