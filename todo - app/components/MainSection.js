

import React, {Component, PropTypes} from 'react';
import TodoItem from './TodoItem'

class MainSection extends Component{

    constructor(props,context) {
        super(props, context);
    }

    render() {
        
        const {todos,todoActions} = this.props;
        
        return (
        <section className="main">
            <ul className="todo-list">
                {
                    todos.map(todo => { 
                            return <TodoItem key={todo.id} todo={todo} {...todoActions}/>
                    })
                }
            </ul>    
        </section>    
        );
       
    }

}

MainSection.propTypes = {
    todos: PropTypes.array.isRequired,
    todoActions:PropTypes.object.isRequired
};


export default MainSection;