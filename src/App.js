import React from 'react';
import { Switch, Route} from "react-router-dom";
import SectionInfo from './sections/SectionInfo/SectionInfo';
import ROUTES from './consts/routes';
import DetailFunctionalities from './pages/detail/DetailFunctionalities';
import HeaderFunctionalities from './sections/HeaderFunctionalities/HeaderFunctionalities';


function App() {
  return (

    
    <div className="App">

    <Switch>
      <Route exact path = {ROUTES.home}>
        <HeaderFunctionalities />
      </Route>

      <Route path = {ROUTES.functionality}>
        <DetailFunctionalities />
      </Route>
    </Switch>

    </div>
    
  );
}

export default App;
