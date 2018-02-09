import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const SignupDisplay = (props) => {
    return (
        <div id='signupContainer'>
            <h2>Signup</h2>
            <TextField
                floatingLabelText="email address"
                id="signupEmailInput"
                autoFocus={true}
            />
            <TextField
                floatingLabelText="username"
                id="signupUsernameInput"
            />
            <TextField
                floatingLabelText="password"
                id="signupPasswordInput"
            />
            <RaisedButton id="signupSubmitButton" onClick={props.pressSignup} label="Signup" primary={true} style={{ margin: 11 }} />

        </div>
    )
}
export default SignupDisplay