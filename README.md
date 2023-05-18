
# FilmSystem-React-NestedRoute-User Interface(UI)

Project will run via via endpoint API which is run by C# and SQL. Data will fetch from SQL via C#. 

## Structure of Project:
|   Tasks     |   Framwork    |  Effect  |
|-----|--------|-------|
|JS |   React, React-Dom   | Fetching Data via Endpoints
|Database |   SQL   | Database has been created through EF Migration
|Model | VS C# & .NET Core 6   | GenreList, Movie, UserChoice, UserList
|Connection |  JSON   |  LocalHost Server
|Web-API |    REST-API(Minimal)     |  Get, Post, Put, Delete
|Demon-Loan |    Swagger     |  WeatherForecast

# Dependencies:
|"react": "^18.2.0", |
|"react-dom": "^18.2.0", |
|react-router-dom": "^5.3.3" |
|"react-scripts": "5.0.1" |
|"web-vitals": "^2.1.4" |


# Test API via Insomnia
=> Get all people in the system
  https://localhost:7159/api/AllPerson - Get

=>Get all genres associated with a specific person
  `https://localhost:7159/api/Person/${props.location.state}/Movie` - Get

=>Enter and Retrieve "rating" on films linked to a person
  const stringData = `${data.rating}?personId=${data.userId}&movieId=${data.movieId}`;
  const url = `https://localhost:7159/api/Movie/rating/${stringData}`; - Post

=>Connect a person to a new genre
  const stringData = `?Name=${data.name}&GenreID=${data.genreID}`;
  const url = `https://localhost:7159/api/Person/PersonChoise${stringData}`; - Post

=>Insert new links for a specific person and a specific genre
  const stringData = `?movieName=${data.movieName}&link=${data.link}&personId=${data.personId}&genreId=${data.genreId}`;
  const url = `https://localhost:7159/api/MovieLink/${stringData}` - Post
  
## BackEnd
This project will run of my MINIMAl API Project(https://github.com/chasmkhasan/FilmSystemMinimalApiSQL.git). That repository available into my github.

## Creator: Welcome to visit my link:

- [MK Hasan - Github](https://github.com/chasmkhasan)
- [MK Hasan - LinkedIN](linkedin.com/in/md-kamrul-hasan-b72b1931)
- [MK Hasan - WebPage](chasmkhasan.github.io/Dynamic-CV/)

