


import React from 'react';
import {render} from 'react-dom'
import App from './modules/App';
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'


import {Router, Route, hashHistory , browserHistory, IndexRoute} from 'react-router';



render(
    
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={Home}/>
            <Route path="/about" component={About} />
            <Route
                path="/repos"
                onEnter={() => { console.log('entering into repos') } }
                onLeave={() => { confirm('Are u sure ?') } }
                component={Repos}>
                <Route path="/repos/:repoId/:recId" component={Repo} />
            </Route>    
        </Route>    
    </Router>    
    
    , document.getElementById('app'));