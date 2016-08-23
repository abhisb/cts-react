


// component class  using JSX

let Button = React.createClass({
    localHandleClick: function () {
        console.log('click');
        this.props.localHandleClick(this.props.increment);
    },
    render: function () {
        return (
            <button className="btn btn-lg btn-primary" onClick={this.localHandleClick}>
                +{this.props.increment}
            </button>
        );
    }
});

let Result = React.createClass({
    render: function () {
        return (
            <div className="badge">count : {this.props.localCounter}</div>
        );
    }
});

let Main = React.createClass({
    getInitialState: function () {
        return {counter:0};  
    },
    handleClick: function (inc) {
        this.setState({ counter: this.state.counter + inc });
        console.log(this.state.counter);
    },
    render: function () {
        return (
            <div className="well">
                <Button localHandleClick={this.handleClick} increment={1}/>
                <Button localHandleClick={this.handleClick} increment={5}/>
                <Button localHandleClick={this.handleClick} increment={10}/>
                <Button localHandleClick={this.handleClick} increment={20}/>
                <hr/>
                <Result localCounter={this.state.counter}/>
            </div>
        );
    }
});



ReactDOM.render(<Main />,document.getElementById('root'));
