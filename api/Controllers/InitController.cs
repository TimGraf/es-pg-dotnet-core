using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using api.Models;
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
        public IEnumerable<Car> Get()
        {
            this._initService.InitData();
            throw new NotImplementedException();
        }
    }
}
