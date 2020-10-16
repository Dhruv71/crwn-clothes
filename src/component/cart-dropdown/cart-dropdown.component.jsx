import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));