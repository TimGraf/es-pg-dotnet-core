namespace api.Services
{
    using Microsoft.Extensions.Logging;
    using System.Globalization;
    using System.IO;
    using CsvHelper;
    using api.Models;

    public class InitService
    {
        private readonly ILogger<InitService> _logger;

        public InitService(ILogger<InitService> logger)
        {
            _logger = logger;
        }

        public void InitData()
        {
            var datasetFile = "dataset/cars_dataset.csv";

            this._logger.LogInformation($"Loading dataset file: {datasetFile}");

            var reader = new StreamReader(datasetFile);
            var csvReader = new CsvReader(reader, CultureInfo.CurrentCulture);
            var records = csvReader.GetRecords<Car>();
        }
    }
}