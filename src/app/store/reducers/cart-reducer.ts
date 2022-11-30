import { CartActions, CartActionTypes } from './../actions/cart-actions';
import { IProduct } from './../../models/Product';

export let initialState: IProduct[] = [];

export function cartReducer(state = initialState, action: CartActions) {
  if (action.type == CartActionTypes.ADD_PRODUCT) {
    // for (let i = 0; i < state.length; i++) {
    //   if (state[i].name !== action.payload.name) {
    //     state[i].quantity++;
    //   } else {
    //     return [...state];
    //   }
    // }
    // if (state.length > 1) {
    //   let cartItem: IProduct = state.find((item) => item.id === state.);
    //   if (cartItem) {
    //     console.log(cartItem, ' CART_ITEM');
    //     cartItem.quantity += 1;
    //   } else {
    //     return [...state, action.payload];
    //   }
    // }
  }
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      return [...state, action.payload];
    case CartActionTypes.REMOVE_PRODUCT:
      return state.filter((p) => p.id !== action.payload.id);
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
}
