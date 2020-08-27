using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using api.Models;
using api.Services;

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CarsController : ControllerBase
    {
        private readonly ILogger<CarsController> _logger;
        private  ICarService _carService;

        public CarsController(ILogger<CarsController> logger, ICarService carService)
        {
            _logger = logger;
            _carService = carService;
        }

        [HttpGet]
        public IEnumerable<Car> Get()
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public IEnumerable<Car> Post()
        {
            throw new NotImplementedException();
        }

        [HttpGet]
        [Route("Search")]
        public async Task<IActionResult> Search([FromQuery] string query)
        {
            var cars = await this._carService.Search(query);
            
            return Ok(cars);
        }

        [HttpGet]
        [Route("Filter")]
        public async Task<IActionResult> Filter([FromQuery] int year, [FromQuery] string make, [FromQuery] string model, [FromQuery] string color)
        {
            var cars = await this._carService.Filter(year, make, model, color);
            
            return Ok(cars);
        }

        #nullable enable
        [HttpGet]
        [Route("FilterSearch")]
        public async Task<IActionResult> FilterSearch([FromQuery] int? year, [FromQuery] string? make, [FromQuery] string? model, [FromQuery] string? color, [FromQuery] string? query)
        {
            var cars = await this._carService.FilterSearch(year, make, model, color, query);
            
            return Ok(cars);
        }

        [HttpGet]
        [Route("Years")]
        public async Task<IActionResult> Years()
        {
            var years = await this._carService.GetYears();
            
            return Ok(years);
        }

        [HttpGet]
        [Route("Makes")]
        public async Task<IActionResult> Makes()
        {
            var years = await this._carService.GetMakes();
            
            return Ok(years);
        }

    }
}
