import React from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import './App.css';

const Hatpage = () =>(
    <div>
    <h1>Hat list</h1>
    </div>
   );

function App() {
  return (
    <div >
     <BrowserRouter>
     <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/hats' component={Hatpage} />
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
