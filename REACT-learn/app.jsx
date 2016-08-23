

let Button=React.createClass({
    localHandleClick:function(){
        this.props.localHandleClick(this.props.increment);
    },
    render:function(){
        return (
            <button className="btn btn-lg btn-danger" 
                    onClick={this.localHandleClick}>
             + {this.props.increment}
            </button> 
        );
    }
});


let Result=React.createClass({
     render:function(){
        return (
            <div className="badge">counter : {this.props.localCounter} </div>
        )
    }
});




let Main=React.createClass({
    getInitialState:function(){
        return {counter:0};
    },
    incrementCount:function(value){
        this.setState({counter:this.state.counter+value}) // re-render
    },
    render:function(){
        return (
            <div className="well">
                <Button increment={1} localHandleClick={this.incrementCount}/>
                <Button increment={10} localHandleClick={this.incrementCount}/>
                <Button increment={100} localHandleClick={this.incrementCount}/>
                <hr/>
                <Result localCounter={this.state.counter}/>
            </div>
        );
    }
});

ReactDOM.render(<Main />,document.getElementById('root'));