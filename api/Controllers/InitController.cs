using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using api.Models;

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InitController : ControllerBase
    {
        private readonly ILogger<InitController> _logger;

        public InitController(ILogger<InitController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Car> Get()
        {
            throw new NotImplementedException();
        }
    }
}
