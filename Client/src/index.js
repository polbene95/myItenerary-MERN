import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import LandingPage from './Containers/LandingPage'
import CitiesPage from './Containers/CitiesPage'
import {createStore, applyMiddleware} from'redux';
import {Provider} from 'react-redux'
import {rootReducer} from './Store/Reducers/rootReducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

const routing = (
    <Router>
        <React.Fragment>
            <Route path="/web/home" component={LandingPage}></Route>
            <Route path="/web/city" component={CitiesPage}></Route>
        </React.Fragment>
    </Router>
)

ReactDOM.render(<Provider store={store}>{routing}</Provider>, document.getElementById('root'));


