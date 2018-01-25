import { combineReducers } from 'redux';
import { dataFetchSuccess, dataFetchLoadErrors, dataFetchIsLoading } from './items';
export default combineReducers({
    dataFetchSuccess,
    dataFetchLoadErrors,
    dataFetchIsLoading
});