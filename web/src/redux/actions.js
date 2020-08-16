// Redux Actions

const filterCarsAction = cars => ({
    type: 'FILTER_CARS',
    payload: cars
});

// Fetch

const filterCars = filter => dispatch => {
    const ADDRESS_URL = new URL('http://localhost:5000/Cars/Filter');
    const config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const params = {year: filter.year, make: filter.make, model: filter.model, color: filter.color}
    ADDRESS_URL.search = new URLSearchParams(params).toString();

    fetch(ADDRESS_URL, config)
        .then(r => r.json())
        .then(data => {
            dispatch(filterCarsAction(data.cars));
        });
};

export default { filterCars };