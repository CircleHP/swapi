import { TEST } from 'actions/constants';

export interface TTest {
    data: null;
};

const initialState = {
    data: null,
};

export default (state: TTest = initialState, action: any) => {
    switch (action.type) {
        case TEST:
            return state.data = action.payload;

        default:
            return state;
    };
};
