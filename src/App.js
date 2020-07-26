import React from 'react';
import Header from './pages/Header/Header';
import { Switch, Route} from "react-router-dom";
import SectionInfo from './pages/SectionInfo/SectionInfo';
import ROUTES from './consts/routes';


function App() {
  return (

    
    <div className="App">

    <Switch>
      <Route exact path = {ROUTES.home}>
      
      <Header />
      </Route>

      <Route path = {ROUTES.functionality}>
        
      </Route>
    </Switch>

    </div>
    
  );
}

export default App;
