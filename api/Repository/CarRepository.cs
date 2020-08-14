namespace api.Repository
{
    using System;
    using Dapper;
    using api.Models;
    using Microsoft.Extensions.Logging;
    using System.Data;

    public class CarRepository : ICarRepository
    {
        private readonly ILogger<CarRepository> _logger;
        protected IDbConnection _connection;

        public CarRepository(ILogger<CarRepository> logger, IDbConnection dbConnection)
        {
            _logger = logger;
            _connection = dbConnection;
        }

        public int SaveCar(Car car)
        {
            this._logger.LogInformation("CarRepository Saving car ...");
            string sql = "insert into cars(id, price, make, model, year, mileage, color, vin, state, country) values(@id, @price, @make, @model, @year, @mileage, @color, @vin, @state, @country);";
            var rows = this._connection.Execute(sql, new {id = Guid.NewGuid(), price = car.price, make = car.make, model = car.model, year = car.year, mileage = car.mileage, color = car.color, vin = car.vin, state = car.state, country = car.country});

            this._logger.LogInformation($"Affected rows {rows}");

            return rows;
        }
    }
}