import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const LoginDisplay = (props) => {
    return (
        <div id='loginContainer'>
            <h2>Login</h2>
            <TextField
                floatingLabelText="username"
                id="loginUsernameInput"
                autoFocus={true}
            />
            <TextField
                floatingLabelText="password"
                id="loginPasswordInput"
            />
            <RaisedButton id="loginSubmitButton" onClick={props.pressLogin} label="Login" primary={true} style={{ margin: 11 }} />
            <p>Want to join? <a href="/signup">Sign up here</a></p>
        </div>
    )
}


export default LoginDisplay
