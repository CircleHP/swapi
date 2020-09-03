import { combineReducers } from 'redux';

import test, { TTest } from './test';

export interface TReduxState {
    // reducer: reducerType
    test: TTest,
};

const mainReducer = combineReducers({
    // reducerName
    test,
});

export default mainReducer;
