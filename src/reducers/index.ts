import { combineReducers } from 'redux';

import ships, { TShips } from './ships';

export interface TReduxState {
    ships: TShips,
};

const mainReducer = combineReducers({
    ships,
});

export default mainReducer;
