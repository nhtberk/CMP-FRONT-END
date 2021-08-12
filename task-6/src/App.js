import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import CostumersAdd from './pages/CostumersAddPage/costumersadd';
import Costumers from './pages/Costumers/costumers';
import CostumersActive from './pages/CostumersActivePage/costumersactive';
import CostumersPassive from './pages/CostumersPassivePage/costumerspassive';
import NavBar from './components/Navbar/Navbar';
import Login from './pages/LoginPage/Login';

function App(){
  return(
    <Router>  
    <NavBar/>
      <main>
        <Switch>
          <Route path="/costumersadd" exact>
              <CostumersAdd/>
          </Route>
          <Route path="/costumers" exact>
            <Costumers/>
          </Route>
          <Route path="/costumersactive" exact>
            <CostumersActive/>
          </Route>
          <Route path="/costumerspassive" exact>
            <CostumersPassive/>
          </Route>
          <Redirect to="/costumers"/>
        </Switch>
      </main>
    </Router>
  )
}
export default App;