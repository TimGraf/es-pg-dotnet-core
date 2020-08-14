namespace api.Repository
{
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
            throw new System.NotImplementedException();
        }
    }
}