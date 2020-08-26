namespace api.Services
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.Extensions.Logging;
    using Nest;
    using Newtonsoft.Json;
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

        public async Task<string> Search(string query)
        {
            var result = await _elasticClient.SearchAsync<Car>(s => s
                .Query(q => q
                    .QueryString(c => c
                        .Query(query)
                        .DefaultOperator(Operator.Or)
                    )
                )
                .Size(200)
            );

            return JsonConvert.SerializeObject(new { cars = result.Documents }, Formatting.None);
        }

        public async Task<string> Filter(int year, string make, string model, string color)
        {
            var result = await _elasticClient.SearchAsync<Car>(s => s
                .Query(q => q
                    .Match(m => m
                        .Field(o => o.year)
                        .Query($"{year}")
                    ) && q
                    .Match(m => m
                        .Field(o => o.make)
                        .Query(make)
                    ) && q
                    .Match(m => m
                        .Field(o => o.model)
                        .Query(model)
                    ) && q
                    .Match(m => m
                        .Field(o => o.color)
                        .Query(color)
                    )
                )
                .Size(200)
            );

            return JsonConvert.SerializeObject(new { cars = result.Documents }, Formatting.None);
        }

        public async Task<string> GetYears()
        {
            var result = await _elasticClient.SearchAsync<Car>(s => s
                .Aggregations(a => a
                    .Terms("years", st => st
                        .Field(o => o.year)
                        .Size(200)
                        .ExecutionHint(TermsAggregationExecutionHint.GlobalOrdinals)
                    )
                )
            );

            var buckets = result.Aggregations.Terms("years").Buckets;
            var years = buckets.Select(bucket => bucket.Key).ToArray();

            return JsonConvert.SerializeObject(new { years = years }, Formatting.None);
        }

        public async Task<string> GetMakes()
        {
            var result = await _elasticClient.SearchAsync<Car>(s => s
                .Aggregations(a => a
                    .Terms("makes", st => st
                        .Field(o => o.make.Suffix("keyword"))
                        .Size(200)
                        .ExecutionHint(TermsAggregationExecutionHint.GlobalOrdinals)
                    )
                )
            );

            var buckets = result.Aggregations.Terms("makes").Buckets;
            var makes = buckets.Select(bucket => bucket.Key).ToArray();

            return JsonConvert.SerializeObject(new { makes = makes }, Formatting.None);
        }
    }
}