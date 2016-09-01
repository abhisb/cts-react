
import {ADD_TODO,DELETE_TODO,EDIT_TODO,COMPLETE_TODO,COMPLETE_ALL,CLEAR_COMPLETED} from '../constants/ActionTypes'

var initialState = {
    todos: [
        { text: 'Learn React', completed: true, id: 1 },
        { text: 'Learn Redux',completed:false,id:2}
    ]
};


export default function todos(state=initialState.todos,action) {
    
    switch (action.type){
        
        case ADD_TODO:
            return [
                {
                    text: action.text,
                    completed: false,
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1 // testing
                },
                ...state
            ];
            
        case DELETE_TODO: {    
            let newState = state.filter(todo => { return todo.id !== action.id });
            return newState;
        }
           
            
        case EDIT_TODO:
            let newState = state.map(todo => {
                return todo.id === action.id ? Object.assign({}, todo, { text: action.text }) : todo;
            });
            //console.log(newState);
            return newState;

        case COMPLETE_TODO:
             return state.map(todo => { 
               return todo.id === action.id ? Object.assign({}, todo, {completed:!todo.completed}):todo
             });     

        case COMPLETE_ALL:
    
            const areAllMarked = state.every(todo => todo.completed);
             return state.map(todo => { 
                return todo.id === action.id ? Object.assign({}, todo, {completed:!areAllMarked}):todo
            });  
            
        case CLEAR_COMPLETED:
             return state.filter(todo => { todo.completed === false });

        default:
            return state;    
    
    }

}


 