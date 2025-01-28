# Reactivities

GitHub Resource:-
- GitHub.com/trycatchlearn/reactivities

Command

dotnet --info (list all installed dotnet sdk and runtime)

to switch between dotnet versions

dotnet new globaljson --sdk-version 3.0.100-preview-010184 --force

to install entity tool to enable migration commands
dotnet tool install --global dotnet-ef --version 7.0.0

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

what types you can use to set prop value?
prop can take any thing that you can put in a variable like functions, objects, arrays

What is react hook?
hook is a function, it starts with 'use'
what are the two important rules of hooks?
 1) only call hooks on the top level (they should be always called)
 2) only call hook in a function component.

whats is state? it is peice of data that is kept in the component
Note: state is a hook
