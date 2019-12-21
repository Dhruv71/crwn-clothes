import React from 'react';
import { BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-signup.component';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utilis';
import {setCurrentUser} from './redux/users/user.action';
import {connect } from 'react-redux';


class App extends React.Component {
 
  unsubscribeFromAuth = null

componentDidMount(){
   const {setCurrentUser} = this.props

   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
 
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      
      userRef.onSnapshot((snapShot) => {
         
          setCurrentUser({ id:snapShot.id,
                        ...snapShot.data()
                      });
      
      });  
    }   
       
        setCurrentUser(userAuth);
      
  }); 
} 
 componentWillUnmount() {
   this.unsubscribeFromAuth();
 }
  
  render(){
  return (
    <div >
     <BrowserRouter>
     <Header  />
     <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' 
      render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />}
      />
     </Switch>
     </BrowserRouter>
    </div>
  );
 }
}
const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
})
const mapDispatchToProps = dispatch => ({

   setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
