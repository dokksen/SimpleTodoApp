import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService';


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'dokksen',
            password: '',
            hasLoginFailed: null,
        };
    }
    /**
     * Handle Form Changes like Username and Password
     * input name should be same with the state name
     */
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    loginClicked = () => {
        if (this.state.username === 'dokksen' && this.state.password === 'hellodokksen') {
            
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
            this.setState({ hasLoginFailed: false });
        }
        else {
            this.setState({ hasLoginFailed: true });
        }
    };

    resetInput = () => {  
        
        console.log("Sucuk");
        this.setState({username: '', password: ''});
       
    };

    render() {
        return (
        <div className="content">
            <div className="login">
            <h1>Login:</h1>
            <div className="loginForm">
                <div>
                    <h3>User Name:</h3>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div>
                    <h3>Password:</h3>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div>
                    <button onClick={this.resetInput}>Reset</button>
                    <button onClick={this.loginClicked}>Login</button>
                </div>
            </div>
            <div>
                <ShowLoginInfo hasLoginFailed={this.state.hasLoginFailed} />
            </div>
            </div>
        </div>
        );
    }
}


function ShowLoginInfo(props) {
    if (props.hasLoginFailed === true) {
        return <h3>Invalid Credentials! Please try again! </h3>;
    }
    else if (props.hasLoginFailed === false) {
        return <h1> Login Succesfull </h1>;
    }
    return null;
}

export default LoginComponent;
