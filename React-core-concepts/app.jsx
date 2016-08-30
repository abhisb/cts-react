



// react component

// var Message = React.createClass({
//     render: function () {
//         return (
//             <div> {'\uD83D\uDC2C'} {this.props.text}  </div>
//         ); 
//     }
// });

// var reactComponent = (<Message text="HelloWorld" />);

// ReactDOM.render(reactComponent, document.getElementById('root'));

//----------------------------------------------------------------


//  JSX- attribute Expressions

// const wraningLevel = 'debug';
// const component = (<Alert
//                         color={wraningLevel === 'debug' ? 'grey' : 'red'}
//                         log={true}           
//                     />);

// or

// var component = React.createElement(Alert, {
//                         color: wraningLevel === 'debug' ? 'grey' : 'red',
//                         log: true
// });


//----------------------------------------------------------------

// var itemDisabled= true;
// var impComp = (<input name="Name" disabled={itemDisabled} />);


//----------------------------------------------------------------

// JSX spread Syntax


// var o = { msg: 'world', receipient: 'World' };

//var comp = (<Component msg={o.msg}  receipient= {o.receipient} />);
// var comp = (<Component {...o} />);

//----------------------------------------------------------------

// JSX gotchas
//------------


// class --> className
// var divComp = (<div className="jumbotron"> react </div>);


// var classNames = ['class1', 'class2'];
// var divComp = (<div className={classNames.join(' ')}> react </div>);


// var formGroup = (<div>
//     <label htmlFor="nameField">Name</label>
//     <input  id="nameField"/>
// </div>);


//----------------------------------------------------------------


// react component - configuration properties


/*

    render()  --> the one required function on evey ReactComponent
    props     --> the 'input parameters '  to our components
    state     --> a way to hold data that is local to a component
    context   --> a 'global variable' for our components
    statics   --> to create class methods for cmponents
    children  --> to acess child components from parent

    stateless components

*/

//----------------------------------------------------------------



// var Message = React.createClass({
//     propTypes: {
//         text:React.PropTypes.string
//     },
//     getDefaultProps: function(){
//         return {
//             text:'Welcome'
//         }
//     },
//     render: function () {
//         return (
//             //React.createElement('div',null,'\uD83D\uDC2C - Hello World')
//             //<div> {'\uD83D\uDC2C'}  - Hello World  </div>
//             <div> {'\uD83D\uDC2C'}  - {this.props.text}  </div>
//             //null
//             //false
//         ); 
//     }
// });

// var reactComponent = (<Message text={'Hello'}/>);

// ReactDOM.render(reactComponent, document.getElementById('root'));

//------------------------------------------------------------------

// component - context

// const ChatWindow = React.createClass({
//     contextTypes: {
//         users:React.PropTypes.array
//     },
//     render: function () {
//         return (
//             <div>
//                 <ol>
//                     <li>{this.context.users[0]}</li> 
//                     <li>{this.context.users[1]}</li> 
//                 </ol>
//             </div>    
//         );
//     }
// });

// const ThreadList = React.createClass({
//     contextTypes: {
//         users:React.PropTypes.array
//     },
//     render: function () {
//         return (
//             <div>
//                  <ul>
//                     <li>{this.context.users[0]}</li> 
//                     <li>{this.context.users[1]}</li> 
//                 </ul>
//             </div>    
//         );
//     }
// });

// const Messages = React.createClass({
//     contextTypes: {
//         users:React.PropTypes.array
//     },
//     render: function () {
//         return (
//             <div>
//                 <ThreadList />
//                 <ChatWindow />
//             </div>    
//         );
//     }
// });


// let allUsers = ['nag', 'ria'];

// const MessageApp = React.createClass({
//     childContextTypes: {
//         users:React.PropTypes.array
//     },
//     getChildContext: function () {
//         return {
//             users:allUsers
//         };
//     },
//     render: function () {
//         return (
//             <div>
//                 <Messages/>
//             </div>    
//         );
//     }
// });



// ReactDOM.render(<MessageApp />,document.getElementById('root'));


//------------------------------------------------------------------

// const Switch = React.createClass({
//     getInitialState: function () {
//         return {
//             payMethod:'debit'
//         }  
//     },
//     select: function (payBy) {
//         var self = this;
//         return function (evt) {
//             console.dir(evt.target);
//             console.log('selecting...' + payBy);
//             self.setState({payMethod:payBy});
//         };
//     },
//     render: function () {
//         return (
//             <div>
//             <div className="list-group">
//                 <div className="list-group-item" onClick={this.select('debit')}>
//                     Debit
//                 </div>
//                  <div className="list-group-item" onClick={this.select('credit')}>
//                     Credit
//                  </div>
//                 <div className="list-group-item" onClick={this.select('other')}>
//                     Other
//                 </div>
//             </div>
//                 pay with : {this.state.payMethod}
//             </div>
//         );
//     }
// });

// ReactDOM.render(<Switch />,document.getElementById('root'));


//---------------------------------------------------------------------


// this.props.children


// const Container = React.createClass({
//     render: function () {
//         return (
//             <div className="well">
//                 {this.props.children}
//             </div>    
//         );
//     }
// });

//---------------------------------------------------------------------

const HomePage = React.createClass({
    statics: {
        getPageTitle: function () {
            return 'Home';
        }
    },
    render: function () {
        return (
            <div className="well">
               Home
            </div>    
        );
    }
});

const AboutPage = React.createClass({
    statics: {
        getPageTitle: function () {
            return 'Home';
        }
    },
    render: function () {
        return (
            <div className="well">
               About
            </div>    
        );
    }
});

let url = 'about';
let page;
if (url == 'home') {
    page=HomePage
} else {
    page=AboutPage
}

var title=page.getPageTitle();
console.log(title);






