import React from 'react';
import Header from './sections/Header/Header';
import { Switch, Route} from "react-router-dom";
import SectionInfo from './sections/SectionInfo/SectionInfo';
import ROUTES from './consts/routes';


function App() {
  return (

    
    <div className="App">

    <Switch>
      <Route exact path = {ROUTES.home}>
      
      <Header />
      </Route>

      <Route path = {ROUTES.functionality}>
        <p>hello world</p>
      </Route>
    </Switch>

    </div>
    
  );
}

export default App;
