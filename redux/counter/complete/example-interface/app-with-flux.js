

//--------------------------------------------------------

function reducer(state, action) {
  if (action.type === 'INCREMENT') {
    return state + action.amount;
  } else if (action.type === 'DECREMENT') {
    return state - action.amount;
  } else {
    return state;
  }
}

function createStore(reducer) {
  
  let state = 10;
  let listeners = [];
  
  const getState = () => (state);

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(l=>l());
  };

  let subscribe = (listener) => { 
    listeners.push(listener);
  }   

  // store-API    
  return {
    getState,
    dispatch,
    subscribe
  };

}

const store = createStore(reducer);


//---------------------------------------------------------

// View

var Counter = React.createClass({
    getInitialState: function () {
      return {count:0};  
    },
    componentDidMount: function () {
      var self = this;
      store.subscribe(function () {
        var newCount = store.getState();
        self.setState({count:newCount});
      }); 
    },
    incrementHandler: function () {
      var action = { type: 'INCREMENT', amount:Number.parseInt(this.refs.amountField.value) };
      store.dispatch(action);
    },
    decrementHandler: function () {
      var action = { type: 'DECREMENT', amount:Number.parseInt(this.refs.amountField.value)};
      store.dispatch(action);
    },
    render: function () {
        return (
            <div className='card'>
                <div className='content'>
                   <div className='header'>{this.state.count}</div>
                </div>
                <div >
                  <div className='ui input' >
                    <input type='text' ref="amountField" placeholder='Enter amount...' />
                  </div>
                  <br/>
                </div>
                <div className='ui bottom attached button' onClick={this.incrementHandler}>
                  <i className='add icon'></i>
                </div>
                <div className='ui bottom attached button' onClick={this.decrementHandler}>
                  <i className='minus icon'></i>
                </div>
            </div>
        );
    }
});

//-----------------------------------------------------------

ReactDOM.render(<Counter />,document.getElementById('root'));