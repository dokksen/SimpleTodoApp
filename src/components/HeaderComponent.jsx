import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from './AuthenticationService';
import {withRouter} from 'react-router'

class HeaderComponent extends Component {
    render(){

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);

        return(
            <div className="header">
                    <div>
                        <h1>Todo App</h1>
                    </div>
                    <div>
                       {isUserLoggedIn && <h3><Link className="navigationLink" to="/welcome">Home</Link></h3>}
                       {isUserLoggedIn && <h3><Link className="navigationLink" to="/todos">Todos</Link></h3>}
                    </div>
                    <div className="log">
                        {!isUserLoggedIn &&<h3><Link className="navigationLink" to="/login">Login</Link></h3>}
                        {isUserLoggedIn && <h3><Link className="navigationLink" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></h3>}
                    </div>
            </div>
         
        );
    }
}

export default withRouter(HeaderComponent);