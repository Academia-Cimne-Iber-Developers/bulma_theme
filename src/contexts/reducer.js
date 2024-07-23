import { ACTIONS } from "./actions";

export default function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.SET_THEME:
            return {
                primary: action.payload.primary,
                secondary: action.payload.secondary,
            };
        case ACTIONS.RESET_THEME:
            return action.payload;
        default:
            return state;
    }
}
