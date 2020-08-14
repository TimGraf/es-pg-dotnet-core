
namespace api.Repository
{
    using api.Models;

    public interface ICarRepository
    {
        int SaveCar(Car car);
    }
}