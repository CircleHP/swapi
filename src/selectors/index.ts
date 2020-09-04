import { TReduxState } from 'reducers';

// ships data
export const getShips = (state: TReduxState) => state.ships?.results;

// counter
export const getCount = (state: TReduxState) => state.ships?.count;

// pagination
export const getNextPageURL = (state: TReduxState) => state.ships?.next;
export const getPreviosPageURL = (state: TReduxState) => state.ships?.previous;
