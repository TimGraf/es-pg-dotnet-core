namespace api.Services
{
    using Microsoft.Extensions.Logging;

    public class SearchCarService
    {
        private readonly ILogger<SearchCarService> _logger;

        public SearchCarService(ILogger<SearchCarService> logger)
        {
            _logger = logger;
        }
    }
}