export const getShipDetails = (name?: string) => {
    return (dispatch: any): void => {
        fetch(`https://swapi.dev/api/starships?search=${name}`)
            .then((shipDetails: any) => shipDetails.json())
            .then((shipDetails: any) => dispatch({ type: 'FETCH_SHIP_DETAILS_SUCCESS', payload: shipDetails.results[0]}))
            .catch((response: Response) => dispatch({ type: 'FETCH_SHIP_DETAILS_SUCCESS', response}));
    };
};
