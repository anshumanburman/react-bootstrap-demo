import React from 'react';
import './App.css';
import Navigation from './components/screens/navigation';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import PageRenderer from './page-render';
import Footer from './components/screens/footer'
import RootNavigation from './navigations';
//*/ 
function App() {
  return (
    <Router>
      <>
    <div className="App">
      <Navigation/>
      {/* <Switch>
        <Route path="/:page" component={PageRenderer}/>
        <Route path="/" render={()=> <Redirect to="/home"/>}/>
        <Route component={()=>404}/>
      </Switch> */}
      <RootNavigation />
    </div>
    </>
    </Router>
    
  );
}

export default App;
