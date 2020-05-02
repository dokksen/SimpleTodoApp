import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class WelcomeComponent extends Component {
    render() {
        return (
            <div className="Welcome">
                Welcommee {this.props.match.params.name}!
                You can manage your <Link to="/todos">todos</Link> here.
            </div>
        );
    }
}

export default WelcomeComponent;
