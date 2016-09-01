
"use strict"

function reducer(state, action) {
  
  if (action.type === 'ADD_MESSAGE') {
    return {
      messages: state.messages.concat(action.message),  // new array
    };
  }
  else if (action.type === 'DELETE_MESSAGE') {
    return {
      messages: [
        ...state.messages.slice(0, action.index),
        ...state.messages.slice(action.index + 1, state.messages.length)
      ]
    };
  }

  
  else {
    return state;
  }
}

function createStore(reducer,initialState) {
  let state = initialState;
  let listeners = [];  


  let getState = () => { return state };
  let dispatch = (action) => { state = reducer(state, action) , listeners.forEach(l=>l()) };
  let subscribe = (listner) => { listeners.push(listner)};
  

  return {
    getState,
    dispatch,
    subscribe
  };
}

const initialState = { messages: [] };
var store = createStore(reducer, initialState);



//-------------------------------------------------------



const App = React.createClass({
       
  componentDidMount: function () {
    store.subscribe(() => this.forceUpdate());
  },
  render: function () {
    const messages = store.getState().messages;

    return (
      <div className='ui segment'>
        <MessageView messages={messages} />
        <MessageInput />
      </div>
    );
  },
});

const MessageInput = React.createClass({      // eslint-disable-line no-undef
  handleSubmit: function () {
    store.dispatch({
      type: 'ADD_MESSAGE',
      message: this.refs.messageInput.value,
    });
    this.refs.messageInput.value = '';
  },
  render: function () {
    return (
      <div className='ui input'>
        <input
          ref='messageInput'
          type='text'
        >
        </input>
        <button
          onClick={this.handleSubmit}
          className='ui primary button'
          type='submit'
        >
          Submit
        </button>
       </div>
    );
  },
});

const MessageView = React.createClass({      // eslint-disable-line no-undef
  handleClick: function (index) {
    store.dispatch({
      type: 'DELETE_MESSAGE',
      index: index,
    });
  },
  render: function () {
    const messages = this.props.messages.map((message, index) => (
      <div
        className='comment'
        key={index}
        onClick={() => this.handleClick(index)}
      >
        {message}
      </div>
    ));
    return (
      <div className='ui comments'>
        {messages}
      </div>
    );
  },
});

ReactDOM.render(      // eslint-disable-line no-undef
  <App />,
  document.getElementById('content')
);



// store.subscribe(function () { 
//   var state = console.log(store.getState());
// });

// var addMessageAction1 = {
//   type: 'ADD_MESSAGE',
//   message:'hello , hw do u do'
// };

// store.dispatch(addMessageAction1);
// // const state1 = store.getState(); // poll


// var addMessageAction2 = {
//   type: 'ADD_MESSAGE',
//   message:'hello , im gud'
// };

// store.dispatch(addMessageAction2);
// // const state2 = store.getState(); // poll

// //console.log(state1);  
// //console.log(state2)


// var deleteAction = {
//   type: 'DELETE_MESSAGE',
//   index:1
// };
// store.dispatch(deleteAction);

// // const state3 = store.getState(); // poll
// // console.log(state3)


