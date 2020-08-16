# es-pg-dotnet-core

A sample .Net Core API using Postgres and Elasticsearch.  Also includes a React app for the front end.

The service loads a used car dataset.

[US Cars Dataset](https://www.kaggle.com/doaaalsenani/usa-cers-dataset/data)

This project requies Docker.  Running `docker-compose up` will bring up the service, the web app front end, Postgres, and Elasticsearch.

The data is loaded into Posgres and Elasticsearch by accessing the init endpoint on the service.

http://localhost:5000/Init