import { Types } from "../actions/list";
const initialSatate = {
    list: null,
    items: [],
};
export default function list(state = initialSatate, action) {
    switch (action.type) {
        case Types.ADD_PRODUCT:
            return {
                list: action.list,
                items: [...state.items, action.product],
            };
        default:
            return state;
    }
}
