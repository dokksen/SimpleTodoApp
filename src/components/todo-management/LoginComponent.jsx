import React, { Component } from 'react';


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
            this.props.history.push(`/welcome/${this.state.username}`);
            this.setState({ hasLoginFailed: false });
        }
        else {
            this.setState({ hasLoginFailed: true });
        }
    };
    render() {
        return (<div>
            <ShowLoginInfo hasLoginFailed={this.state.hasLoginFailed} />
        User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        Passwort:  <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            <button onClick={this.loginClicked}>Login</button>
        </div>);
    }
}


function ShowLoginInfo(props) {
    if (props.hasLoginFailed === true) {
        return <div> Invalid Credentials </div>;
    }
    else if (props.hasLoginFailed === false) {
        return <div> Login Succesfull </div>;
    }
    return null;
}

export default LoginComponent;
