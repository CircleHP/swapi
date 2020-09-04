export interface TShips {
    data: {
        count: number,
        next: string,
        previous: string,
        results: Array<{
            MGLT: string,
            cargo_capacity: string,
            consumables: string,
            cost_in_credits: string,
            created: string,
            crew: string,
            edited: string,
            films: Array<string>,
            hyperdrive_rating: string,
            length: string,
            manufacturer: string,
            max_atmosphering_speed: string,
            model: string,
            name: string,
            passengers: string,
            pilots: Array<string>,
            starship_class: string,
            url: string,
        }>
    } | null;
};

const initialState = {
    data: null,
};

export default (state: TShips = initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_SHIPS_SUCCES':
            return state.data = action.payload;

        default:
            return state;
    };
};
