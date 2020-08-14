# https://hub.docker.com/_/microsoft-dotnet-core
FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /source


# copy csproj and restore as distinct layers
COPY ./api/*.csproj ./
RUN dotnet restore

# copy everything else and build app
COPY ./api/ ./
WORKDIR /source
RUN dotnet publish -c release -o /app

# final stage/image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY ./api/dataset/cars_datasets.csv ./dataset/cars_datasets.csv
COPY --from=build /app ./
ENTRYPOINT ["dotnet", "api.dll"]