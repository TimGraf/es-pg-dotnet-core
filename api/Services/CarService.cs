namespace api.Services
{
    using api.Models;
    using Microsoft.Extensions.Logging;
    using System.Threading.Tasks;

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
            this._logger.LogInformation("CarService Saving car ...");
            var rows = this._databaseCarService.SaveCar(car);
            this._searchCarService.SaveCar(car);

            return rows;
        }

        public async Task<string> Search(string query)
        {
            return await this._searchCarService.Search(query);
        }

        public async Task<string> Filter(int year, string make, string model, string color)
        {
            return await this._searchCarService.Filter(year, make, model, color);
        }

        #nullable enable
        public async Task<string> FilterSearch(int? year, string? make, string? model, string? color, string? query)
        {
            return await this._searchCarService.FilterSearch(year, make, model, color, query);
        }

        public async Task<string> GetYears()
        {
            return await this._searchCarService.GetYears();
        }

        public async Task<string> GetMakes()
        {
            return await this._searchCarService.GetMakes();
        }
    }
}