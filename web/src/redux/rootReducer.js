export default (state = {}, { type, payload }) => {
    switch (type) {
        case 'FILTER_CARS':
            return {
                ...state,
                cars: payload
            };
        case 'SEARCH_CARS':
            return {
                ...state,
                cars: payload
            };
        case 'FILTER_SEARCH_CARS':
            return {
                ...state,
                cars: payload.cars,
                filterSearch: payload.filterSearch
            };
        case 'GET_YEARS':
            return {
                ...state,
                years: payload
            };
        case 'GET_MAKES':
            return {
                ...state,
                makes: payload
            };
        default:
            return state;
    }
}