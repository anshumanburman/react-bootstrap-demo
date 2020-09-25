import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Blog from '../components/screens/pages/blog';
import ContactUs from '../components/screens/pages/contact-us';
import Home from '../components/screens/pages/home';
import Login from '../components/screens/pages/login';
const RootNavigation = () => {
    return (
        <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/contact-us" component={ContactUs}/>
        <Route path="/" render={()=> <Redirect to="/home"/>}/>
        <Route component={()=>404}/>
      </Switch>
    )
}

export default RootNavigation;