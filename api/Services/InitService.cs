namespace api.Services
{
    using Microsoft.Extensions.Logging;
    using System.Linq;
    using System.Globalization;
    using System.IO;
    using CsvHelper;
    using api.Models;

    public class InitService : IInitService
    {
        private readonly ILogger<InitService> _logger;
        private ICarService _carService;

        public InitService(ILogger<InitService> logger, ICarService carService)
        {
            _logger = logger;
            _carService = carService;
        }

        public void InitData()
        {
            var datasetFile = "dataset/cars_dataset.csv";

            this._logger.LogInformation($"Loading dataset file: {datasetFile}");

            var reader = new StreamReader(datasetFile);
            var csvReader = new CsvReader(reader, CultureInfo.CurrentCulture);
            var records = csvReader.GetRecords<Car>();

            records.Select(car => this._carService.SaveCar(car));
        }
    }
}