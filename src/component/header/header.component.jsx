import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { connect} from 'react-redux';
import { auth } from '../../firebase/firebase.utilis';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdrown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/users/user.selectors';
import {createStructuredSelector} from 'reselect';

const Header = ({currentUser,hidden}) => (
     <div className='header'>
     <Link className='logo-container' to="/">
      <Logo className='logo' />
     </Link>
     <div className='options'>
      <Link className='option' to="/shop">
       SHOP
      </Link>
      <Link className='option' to="/shop">
       CONTACT
      </Link>
      { 
          currentUser ?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
          <Link className='option' to='/signin'>SIGN IN</Link> 
      }
      <CartIcon />
     </div>
     {hidden ? null : <CartDropdrown />}
     </div>
	);
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header); 