// Redux Actions

const filterCarsAction = cars => ({
    type: 'FILTER_CARS',
    payload: cars
});

const searchCarsAction = cars => ({
    type: 'SEARCH_CARS',
    payload: cars
});

const filterSearchCarsAction = (cars, filterSearch) => ({
    type: 'FILTER_SEARCH_CARS',
    payload: { cars: cars, filterSearch: filterSearch }
});

const getCarYearsAction = (years) => ({
    type: 'GET_YEARS',
    payload: years
});


const getCarMakesAction = (makes) => ({
    type: 'GET_MAKES',
    payload: makes
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
    const params = { year: filter.year, make: filter.make, model: filter.model, color: filter.color }
    ADDRESS_URL.search = new URLSearchParams(params).toString();

    fetch(ADDRESS_URL, config)
        .then(r => r.json())
        .then(data => {
            dispatch(filterCarsAction(data.cars));
        });
};

const searchCars = search => dispatch => {
    const ADDRESS_URL = new URL('http://localhost:5000/Cars/Search');
    const config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const params = { query: search }
    ADDRESS_URL.search = new URLSearchParams(params).toString();

    fetch(ADDRESS_URL, config)
        .then(r => r.json())
        .then(data => {
            dispatch(searchCarsAction(data.cars));
        });
};

const getYears = () => dispatch => {
    const ADDRESS_URL = new URL('http://localhost:5000/Cars/Years');
    const config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(ADDRESS_URL, config)
        .then(r => r.json())
        .then(data => {
            dispatch(getCarYearsAction(data.years));
        });
};

const getMakes = () => dispatch => {
    const ADDRESS_URL = new URL('http://localhost:5000/Cars/Makes');
    const config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(ADDRESS_URL, config)
        .then(r => r.json())
        .then(data => {
            dispatch(getCarMakesAction(data.makes));
        });
};

const filterSearchCars = filterSearch => dispatch => {
    const ADDRESS_URL = new URL('http://localhost:5000/Cars/FilterSearch');
    const config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    let params = {};

    if (filterSearch.year) {
        params = { ...params, year: filterSearch.year }
    }

    if (filterSearch.make) {
        params = { ...params, make: filterSearch.make }
    }

    if (filterSearch.model) {
        params = { ...params, model: filterSearch.model }
    }

    if (filterSearch.color) {
        params = { ...params, color: filterSearch.color }
    }

    if (filterSearch.query) {
        params = { ...params, query: filterSearch.query }
    }

    ADDRESS_URL.search = new URLSearchParams(params).toString();

    fetch(ADDRESS_URL, config)
        .then(r => r.json())
        .then(data => {
            dispatch(filterSearchCarsAction(data.cars, filterSearch));
        });
};

export default { filterCars, searchCars, filterSearchCars, getYears, getMakes };