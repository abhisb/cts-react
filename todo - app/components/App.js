
import React, {Component} from 'react'
import Header from './Header'
import MainSection from './MainSection'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import configureStore from '../store/configureStore'
import * as ActionTypes from '../actions'

class App extends Component{
    
    render() {
        const {todos, todoActions} = this.props;
        return (
            <div>
                <Header addTodo={todoActions.addTodo}/> 
                <MainSection todos={todos} todoActions={todoActions}/>
            </div>    
        );
    }
}



// Connects a React component to a Redux store  

function mapStateToProps(state) {
    return {todos:state.todos};
}
function mapDispatchToProps(dispatch) {
    return {todoActions:bindActionCreators(ActionTypes,dispatch)}; 
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

