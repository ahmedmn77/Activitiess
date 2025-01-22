# Reactivities

GitHub Resource:-
- GitHub.com/trycatchlearn/reactivities

Command
dotnet --info (list all installed dotnet sdk and runtime)
to switch between dotnet versions
dotnet new globaljson --sdk-version 3.0.100-preview-010184 --force

to install entity tool to enable migration commands
dotnet tool install --global dotnet-ef --version 7.0.3

to add your initial migration
dotnet ef migrations add InitialCreate -s API -p Persistence
API argument is the startup project
Persistence argument is the project which contains the dbContext

to run database update using .Net cli:
dotnet ef database update -s MMS.API -p MMS.Data

What is module in js or react?
it is file that contains java script code like constants, objects, functions, variables.
What is the differnce betwen using export default and normat export?
when you use export default you can import withlout writing curly braces.
