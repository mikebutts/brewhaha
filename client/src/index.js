import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './components/Checkout';
import Signin from './components/Signin';
import Signup from './components/Signup';
import 'gestalt/dist/gestalt.css';
import Navbar from './components/Navbar';
import Brews from './components/Brews'

const Root = () => ( 
    <Router>
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route component = {App} path= "/" exact />
                <Route component = {Checkout} path= "/checkout" />
                <Route component = {Signin} path= "/signin" />
                <Route component = {Signup} path= "/signup" />
                <Route component = {Brews} path="/:brandId" />
                <Route component = {App} />

            </Switch>

        </React.Fragment>

    </Router>
)


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();



if (module.hot) {
    module.hot.accept();
}