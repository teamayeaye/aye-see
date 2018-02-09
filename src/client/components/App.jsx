import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginDisplay from './Login.jsx';
import SignupDisplay from './Signup.jsx';
import ImageGrid from './ImageGrid.jsx'
import NavBar from './NavBar.jsx'
// import HomeIcon from './HomeIcon.jsx'
class App extends Component {
    constructor() {
        super();
        this.state = {
        }

    }
    render() {
        return (<MuiThemeProvider><LoginDisplay />
            <SignupDisplay /><ImageGrid /><NavBar /></MuiThemeProvider>
        )
    }
}

export default App;