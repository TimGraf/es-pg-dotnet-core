
namespace api.Services
{
    using System.Threading.Tasks;
    using api.Models;

    public interface ISearchCarService
    {
        Task SaveCar(Car car);
    }
}