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
                cars: payload
            };
        default:
            return state;
    }
}