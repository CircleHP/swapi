import { TReduxState } from 'reducers';

// ships data
export const getShips = (state: TReduxState) => state.ships.data?.results;

// counter
export const getCount = (state: TReduxState) => state.ships.data?.count;

// pagination
export const getNextPageURL = (state: TReduxState) => state.ships.data?.next;
export const getPreviosPageURL = (state: TReduxState) => state.ships.data?.previous;
