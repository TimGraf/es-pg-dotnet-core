
namespace api.Services
{
    using System.Threading.Tasks;
    using api.Models;

    public interface ICarService
    {
        int SaveCar(Car car);

        Task<string> Search(string query);

        Task<string> GetYears();

        Task<string> GetMakes();
    }
}