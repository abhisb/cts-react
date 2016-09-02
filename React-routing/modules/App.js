


import React, {Component} from 'react';
import {Link} from 'react-router';

class App extends Component{
    render() {
        return (
            <div className="jumbotron">
                <Link to="/">App - component</Link>
                <hr/>
                <div className="row">
                    <div className="col-md-3 col-sm-3">
                    <ul className="nav stacked-nav">
                        <li><Link activeStyle={{color:'red'}} to="about">About</Link></li>
                        <li><Link activeStyle={{color:'red'}} to="Repos">Repos</Link></li>
                    </ul> 
                    </div>
                    <div className="col-md-9 col-sm-9">
                       {this.props.children}
                    </div>    
                </div>    

            </div>    
        );
    }
}

export default App;