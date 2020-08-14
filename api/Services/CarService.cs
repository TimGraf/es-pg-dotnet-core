namespace api.Services
{
    using api.Models;
    using Microsoft.Extensions.Logging;

    public class CarService : ICarService
    {
        private readonly ILogger<CarService> _logger;

        public CarService(ILogger<CarService> logger)
        {
            _logger = logger;
        }

        public int SaveCar(Car car)
        {
            throw new System.NotImplementedException();
        }
    }
}