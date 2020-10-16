import React from 'react';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { connect} from 'react-redux';
import { auth } from '../../firebase/firebase.utilis';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdrown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/users/user.selectors';
import {createStructuredSelector} from 'reselect';
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './header.styles';

  
const Header = ({currentUser,hidden}) => (
     <HeaderContainer>
     <LogoContainer to="/">
      <Logo className='logo' />
     </LogoContainer>
     <OptionsContainer>
      <OptionLink to="/shop">
       SHOP
      </OptionLink>
      <OptionLink to="/shop">
       CONTACT
      </OptionLink>
      { 
          currentUser ?
          <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> :
          <OptionLink to='/signin'>SIGN IN</OptionLink> 
      }
      <CartIcon />
     </OptionsContainer>
     {hidden ? null : <CartDropdrown />}
     </HeaderContainer>
	);
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header); 