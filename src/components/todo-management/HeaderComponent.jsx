import React, { Component } from 'react';

class HeaderComponent extends Component {
    render(){
        return(
            <div className="header">
                    <div>
                        <h1><a>Todo App</a></h1>
                    </div>
                    <div className="navigationLinks">
                        <h3><a>Home</a></h3>
                        <h3><a>Todos</a></h3>
                    </div>
                    <div className="navigationLinks">
                        <h3><a>Login</a></h3>
                        <h3><a>Logout</a></h3>
                    </div>
            </div>
         
        );
    }
}

export default HeaderComponent;