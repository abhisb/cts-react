
import React, {Component} from 'react';
import Header from './Header';

import configureStore from '../store/configureStore';
import * as ActionTypes from '../actions'



class App extends Component{

    constructor(props,context) {
        super(props,context);
    }

    componentDidMount() {
        var self = this;
        this.props.store.subscribe(function () { 
            var todos = self.props.store.getState().todos;
            console.log(todos);
            console.log('App comp re-render...on store-state change');
            self.forceUpdate();
        });
    }

    addTodo(text) {
        console.log('adding todo - ' + text);
        // create Action
        let action = ActionTypes.addTodo(text); // Action Creator
        console.log(action);
        // dispatch Action , need 'store' reference
        this.props.store.dispatch(action);
    }    

    render() {
        return (
            <div>
                <Header addTodo={this.addTodo.bind(this)}/>            
            </div>    
        );
    }
}


export default App;
