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
