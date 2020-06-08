import { Types } from "../actions/list";
import { createSelector } from "reselect";
import { v1 as uuidv1 } from "uuid";
const initialSatate = {
    list: null,
    items: [],
};
export default function list(state = initialSatate, action) {
    switch (action.type) {
        case Types.ADD_PRODUCT:
            return {
                list: action.list,
                items: [
                    ...state.items,
                    {
                        ...action.product,
                        total: getItemTotal(action.product),
                        id: uuidv1(),
                        checked: false,
                    },
                ],
            };

        case Types.DELETE_PRODUCT:
            return {
                ...state,
                items: state.items.filter(
                    (item) => item.id !== action.productId
                ),
            };

        case Types.TOGGLE_PRODUCT:
            return {
                // achar item a ser modificado
                ...state,
                items: toggleItem(state.items, action.productId),
            };
        default:
            return state;
    }
}

function getItemTotal(product) {
    return product.price * product.quantity;
}
function toggleItem(items, productId) {
    const index = items.findIndex((item) => item.id === productId);

    return [
        // todos items anter do item a ser modificado
        ...items.slice(0, index),

        // Item Atualizado
        { ...items[index], checked: !items[index].checked },

        // Todos os items depois de ser modificados
        ...items.slice(index + 1),
    ];
}

export const getListTotal = createSelector(
    (state) => state.list.items,
    (items) => items.reduce((total, item) => total + item.total, 0)
);
