import React from 'react';
import {ReactComponent as ShopingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';

const CartIcon = ({toggleCartHidden}) => (
       <div className='cart-icon' onClick={toggleCartHidden}>
        <ShopingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
      </div>
	);
 const mapDispatchToProps = dispatch => ({
 	toggleCartHidden : () => dispatch(toggleCartHidden())
 });
export default connect(null, mapDispatchToProps)(CartIcon);