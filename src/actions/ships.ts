import { PATH } from './constants';

export const getShips = () => {
    return (dispatch: any): void => {
        fetch(PATH)
            .then((shipsData: any) => shipsData.json())
            .then((shipsData: any) => dispatch({ type: 'FETCH_SHIPS_SUCCES', payload: shipsData}))
            .catch((response: Response) => dispatch({ type: 'FETCH_SHIPS_ERROR', response}));
    };
};

export const showNext = (nextURL: string) => {
    return (dispatch: any): void => {
        fetch(nextURL)
            .then((shipsData: any) => shipsData.json())
            .then((shipsData: any) => dispatch({ type: 'SHOW_NEXT_SUCCESS', payload: shipsData}))
            .catch((response: Response) => dispatch({ type: 'SHOW_NEXT_ERROR', response}));
    };
};

export const showPrevious = (previosURL: string) => {
    return (dispatch: any): void => {
        fetch(previosURL)
            .then((shipsData: any) => shipsData.json())
            .then((shipsData: any) => dispatch({ type: 'SHOW_PREVIOUS_SUCCESS', payload: shipsData}))
            .catch((response: Response) => dispatch({ type: 'SHOW_PREVIOS_ERROR', response}));
    };
};

export const searchShip = (name: string) => {
    return (dispatch: any): void => {
        fetch(`https://swapi.dev/api/starships?search=${name}`)
            .then((ship: any) => ship.json())
            .then((ship: any) => dispatch({ type: 'SEARCH_SHIP_SUCCESS', payload: ship}))
            .catch((response: Response) => dispatch({ type: 'SEARCH_SHIP_ERROR', response}));
    };
};
