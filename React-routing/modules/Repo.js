


import React, {Component} from 'react';
import {Link} from 'react-router';

class Repo extends Component{
    render() {
        return (
            <div className="well">
                Repo component,
                <span className="badge">{this.props.params.repoId}</span>
                <span className="badge">{this.props.params.recId}</span>
            </div>    
        );
    }
}

export default Repo;