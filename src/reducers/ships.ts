export interface TShips {
    count: number | null,
    next: string | null,
    previous: string | null,
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
};

const initialState = {
    count: null,
    next: null,
    previous: null,
    results: [],
}

export default (state: TShips = initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_SHIPS_SUCCES':
            return state = action.payload;

        default:
            return state;
    };
};
