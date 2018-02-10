import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Login extends Component {
  constructor () {
    super();
    this.pressLogin = this.pressLogin.bind(this);
  }

  pressLogin () {
    fetch('/login', {
      method: 'POST',
      body: {
        username: document.getElementById('loginUsernameInput').value,
        password: document.getElementById('loginPasswordInput').value
      }
    })
    .then(res => res.json())
    .then(response => {
      console.log('RESPONSE', response);
      // if (response !== 'Invalid credentials') {
      this.props.handleAuthentication(response);
      // }
    });
  }

  render () {
    return (
      <div id="loginContainer">
        <h2>Login</h2>
        <div>
          <TextField
            floatingLabelText="username"
            id="loginUsernameInput"
            autoFocus={true}
          />
        </div>
        <div>
          <TextField floatingLabelText="password" id="loginPasswordInput" />
        </div>
        <div>
          <Link to="/home">
            {' '}
            <RaisedButton
              id="loginSubmitButton"
              onClick={this.pressLogin}
              label="Login"
              primary={true}
              style={{ margin: 11 }}
            />
          </Link>
          <p>
            Want to join? <Link to="/signup">Sign up here</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
