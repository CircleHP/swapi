export interface TShipDetails {
    MGLT: string | null,
    cargo_capacity: string | null,
    consumables: string | null,
    cost_in_credits: string | null,
    created: string | null,
    crew: string | null,
    edited: string | null,
    hyperdrive_rating: string | null,
    length: string | null,
    manufacturer: string | null,
    max_atmosphering_speed: string | null,
    model: string | null,
    name: string | null,
    passengers:string | null,
    films: Array<string> | null,
    pilots: Array<string> | null,
    starship_class:string | null,
    url: string | null,
};

const initialState = {
    MGLT: null,
    cargo_capacity: null,
    consumables: null,
    cost_in_credits: null,
    created: null,
    crew: null,
    edited: null,
    hyperdrive_rating: null,
    length: null,
    manufacturer: null,
    max_atmosphering_speed: null,
    model: null,
    name: null,
    passengers: null,
    films: null,
    pilots: null,
    starship_class: null,
    url: null,
};

export default (state: TShipDetails = initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_SHIP_DETAILS_SUCCESS':
            return state = action.payload;

        default:
            return initialState;
    };
};
