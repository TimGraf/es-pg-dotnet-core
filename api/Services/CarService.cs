namespace api.Services
{
    using api.Models;
    using Microsoft.Extensions.Logging;

    public class CarService : ICarService
    {
        private readonly ILogger<CarService> _logger;
        private IDatabaseCarService _databaseCarService;
        private ISearchCarService _searchCarService;

        public CarService(ILogger<CarService> logger, IDatabaseCarService databaseCarService, ISearchCarService searchCarService)
        {
            _logger = logger;
            _databaseCarService = databaseCarService;
            _searchCarService = searchCarService;
        }

        public int SaveCar(Car car)
        {
            throw new System.NotImplementedException();
        }
    }
}