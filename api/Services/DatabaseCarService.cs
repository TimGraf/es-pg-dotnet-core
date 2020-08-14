namespace api.Services
{
    using Microsoft.Extensions.Logging;
    using api.Models;
    using api.Repository;

    public class DatabaseCarService : IDatabaseCarService
    {
        private readonly ILogger<DatabaseCarService> _logger;
        private ICarRepository _repository;

        public DatabaseCarService(ILogger<DatabaseCarService> logger, ICarRepository repository)
        {
            _logger = logger;
            _repository = repository;
        }

        public int SaveCar(Car car)
        {
            this._logger.LogInformation("DatabaseCarService Saving car ...");
            return this._repository.SaveCar(car);
        }
    }
}