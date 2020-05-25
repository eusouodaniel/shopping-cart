import produce from 'immer';

function cart(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART_SUCCESS':
            return produce(state, draft => {
                const { product } = action;

                draft.push(product);
            })
        case 'REMOVE_FROM_CART':
            return produce(state, draft => {
                const searchProduct = draft.findIndex(p => p.id === action.id);
                if (searchProduct >= 0) {
                    draft.splice(searchProduct, 1);
                }
            })
        case 'UPDATE_AMOUNT_FROM_CART': {
            if (action.amount <= 0) {
                return state;
            }
            return produce(state, draft => {
                const searchProduct = draft.findIndex(p => p.id === action.id);
                if (searchProduct >= 0) {
                    draft[searchProduct].amount = Number(action.amount);
                }
            })
        }
        default:
            return state;
    }
}

export default cart;
