import { combineReducers } from 'redux';

import ships, { TShips } from './ships';
import shipDetails, { TShipDetails} from './shipDetails';

export interface TReduxState {
    ships: TShips,
    shipDetails: TShipDetails,
};

const mainReducer = combineReducers({
    ships,
    shipDetails,
});

export default mainReducer;
