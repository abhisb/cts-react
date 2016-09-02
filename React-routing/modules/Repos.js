


import React, {Component} from 'react';
import {Link} from 'react-router';

class Repos extends Component{
    render() {
        return (
            <div className="well">
                Repos - component
                <hr/>    
                 <div className="row">
                    <div className="col-md-3 col-sm-3">
                    <ul className="nav stacked-nav">
                        <li><Link activeStyle={{color:'red'}} to="/repos/repo1/rec1">repo-1+rec1</Link></li>
                        <li><Link activeStyle={{color:'red'}} to="/repos/repo2/rec2">repo-2+rec2</Link></li>
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

export default Repos;