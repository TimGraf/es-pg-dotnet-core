namespace api.Models
{
    using CsvHelper.Configuration;
    using System.Globalization;

    public class CarMap : ClassMap<Car>
    {
        public CarMap()
        {
            AutoMap(CultureInfo.InvariantCulture);
            Map(m => m.id).Ignore();
        }
    }
}