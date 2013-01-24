import React from 'react'
import Home from './App';
import SecondRoute from './SecondRoute'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// Use something like react-router-dom to manage multiple pages/routes

// create route to new page /second
const Routes = (props) => {
    return <Router>
        <Route path="/" render={() => <Home {...props} />} exact />
        <Route path="/second"render={() => <SecondRoute {...props} />} />
    </Router>
}
export default Routes;
