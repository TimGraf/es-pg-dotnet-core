namespace api.Services
{
    using Microsoft.Extensions.Logging;

    public class DatabaseCarService
    {
        private readonly ILogger<DatabaseCarService> _logger;

        public DatabaseCarService(ILogger<DatabaseCarService> logger)
        {
            _logger = logger;
        }
    }
}