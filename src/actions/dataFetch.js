export function dataFetchLoadErrors(bool) {
    return {
        type: 'DATA_FETCH_ERROR',
        hasErrors: bool
    };
}
export function dataFetchIsLoading(bool) {
    return {
        type: 'DATA_FETCH_LOADING',
        isLoading: bool
    };
}
export function dataFetchSuccess(content) {
    return {
        type: 'DATA_FETCH_SUCCESS',
        // ECMA6 equivalent to weather: weather
        content  
    };
}

export function dataFetch(url) {
    return (dispatch) => {
        dispatch(dataFetchIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(dataFetchIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(dataFetchSuccess(content)))
            .catch(() => dispatch(dataFetchLoadErrors(true)));
    };
}