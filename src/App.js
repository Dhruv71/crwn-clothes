import React from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import './App.css';



function App() {
  return (
    <div >
     <BrowserRouter>
     <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
