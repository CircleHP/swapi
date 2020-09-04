import { TReduxState } from 'reducers';

// ships data
export const getShips = (state: TReduxState) => state.ships?.results;

//ship details
export const getShipDetails = (state: TReduxState) => state.shipDetails;

// counter
export const getCount = (state: TReduxState) => state.ships?.count;

// pagination
export const getNextPageURL = (state: TReduxState): string | null => state.ships?.next;
export const getPreviosPageURL = (state: TReduxState): string | null => state.ships?.previous;
