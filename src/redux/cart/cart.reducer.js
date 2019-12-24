import CartActionTypes from './cart.types';
import {addItemToCart} from './cart.utils';

const INITIAL_STATE = {
	hidden : true,
	cartItems: []
};

const cartReducer = (state  = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN : return {
			...state,
			hidden : !state.hidden
		};
        
        case CartActionTypes.ADD_ITEM : return {
        	...state,
            cartItems : addItemToCart(state.cartItems, action.payload)
        }
        case CartActionTypes.CLEAR_ITEM_FROM_CART : return{
        	...state,
        	cartItems : state.cartItems.filter(cartItem => cartItem.id!== action.payload.id )
        }
        case CartActionTypes.REMOVE_ITEM : return {
        	...state,
        	cartItems : action.payload.quantity!==1 ? state.cartItems.map(cartItem => 
        		cartItem.id === action.payload.id ? 
  	     {...cartItem, quantity: cartItem.quantity - 1} :
  	     cartItem ) : state.cartItems.filter(cartItem => cartItem.id!== action.payload.id )
        }
		
		default :{ return state};
	}
};

export default cartReducer;