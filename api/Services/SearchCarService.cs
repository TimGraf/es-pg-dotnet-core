namespace api.Services
{
    using Microsoft.Extensions.Logging;
    using Nest;

    public class SearchCarService : ISearchCarService
    {
        private readonly ILogger<SearchCarService> _logger;
        private readonly IElasticClient _elasticClient;

        public SearchCarService(ILogger<SearchCarService> logger, IElasticClient elasticClient)
        {
            _logger = logger;
            _elasticClient = elasticClient;
        }
    }
}