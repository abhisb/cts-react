

import React, {Component, PropTypes} from 'react';
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

class TodoItem extends Component{

    constructor(props,context) {
        super(props, context);
        this.state = {
            editing:false
        }
    }


    handleDoubleClick(){
        this.setState({editing:true});
    }

    handleSave(id,text){
        if(text.length===0){
            this.props.deleteTodo(id);
        } else {
            console.log('editing..'+text);
            this.props.editTodo(text,id);
        }
        this.setState({editing:false});
    }


    render() {

        let element;   
        const {todo,completeTodo,deleteTodo} = this.props;  // es6 - object destructuring
        
        if (this.state.editing) {
            element=<TodoTextInput 
                     editing={this.state.editing}
                     text={todo.text}
                     onSave={(text)=>this.handleSave(todo.id,text)}/>
        } else{
            element = <div className="view">
                <input type="checkbox"
                       checked={todo.completed}
                       className="toggle" 
                       onChange={()=>completeTodo(todo.id)}/>
                <label onDoubleClick={this.handleDoubleClick.bind(this)}>
                    {todo.text}
                </label>
                <button onClick={()=>deleteTodo(todo.id)} className="destroy"></button>
            </div>
        }

        return (
            <li className={
                classnames({completed:todo.completed, editing:this.state.editing}) 
            }>
                {element}
            </li>   
        );
    }

}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};


export default TodoItem;