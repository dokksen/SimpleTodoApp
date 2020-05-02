import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import  LoginComponent  from './LoginComponent';
import  WelcomeComponent  from './WelcomeComponent';
import ListTodosComponent from './ListTodosComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import './style/style.css';

class TodoApp extends Component {
  render() {
    return(
        <div className='TodoApp'>
            <Router>
                <>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/welcome/:name" component={WelcomeComponent}/>
                        <Route path="/todos" component={ListTodosComponent}/>
                        <Route path="" component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>   
                </>       
            </Router>
        </div>
    )
  }
}

function ErrorComponent(){
    return <div>An Error has occured please contact Max Mustermann!</div>
}


export default TodoApp;
