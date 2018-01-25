export function dataFetchLoadErrors(state = false, action) {
    switch (action.type) {
        case 'DATA_FETCH_ERROR':
            return action.hasErrors;
        default:
            return state;
    }
}
export function dataFetchIsLoading(state = false, action) {
    switch (action.type) {
        case 'DATA_FETCH_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function dataFetchSuccess(state = [], action) {
    switch (action.type) {
        case 'DATA_FETCH_SUCCESS':
            return action.content;
        default:
            return state;
    }
}