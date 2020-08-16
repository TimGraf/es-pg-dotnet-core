using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using api.Services;

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InitController : ControllerBase
    {
        private readonly ILogger<InitController> _logger;
        private  IInitService _initService;

        public InitController(ILogger<InitController> logger, IInitService initService)
        {
            _logger = logger;
            _initService = initService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            this._logger.LogInformation("Initializing data ...");
            this._initService.InitData();

            return Ok("Data inititalized");
        }
    }
}
