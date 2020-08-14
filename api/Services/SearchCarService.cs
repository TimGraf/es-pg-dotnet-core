namespace api.Services
{
    using System.Threading.Tasks;
    using Microsoft.Extensions.Logging;
    using Nest;
    using api.Models;

    public class SearchCarService : ISearchCarService
    {
        private readonly ILogger<SearchCarService> _logger;
        private readonly IElasticClient _elasticClient;

        public SearchCarService(ILogger<SearchCarService> logger, IElasticClient elasticClient)
        {
            _logger = logger;
            _elasticClient = elasticClient;
        }

        public async Task SaveCar(Car car)
        {
            await _elasticClient.IndexDocumentAsync<Car>(car);
        }
    }
}