import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginDisplay from './Login.jsx';
import SignupDisplay from './Signup.jsx';
import ImageGrid from './ImageGrid.jsx';
import NavBar from './NavBar.jsx';
import HomePageContainer from '../containers/HomePageContainer.jsx';
import StoryCommentPageContainer from '../containers/StoryCommentPageContainer.jsx';
import StoryHeader from './StoryHeader.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
    constructor() {
        super();
        this.state = {
        }

    }
    render() {
        return (
            <Router>
                <MuiThemeProvider>
                    <Route exact path="/" component={LoginDisplay} />
                    <Route path="/signup" component={SignupDisplay} />
                    <Route path="/home" component={HomePageContainer} />
                    <Route path="/commentFeed/:post_id" component={StoryCommentPageContainer} />
                </MuiThemeProvider>

            </Router>

        )
    }
}

export default App;
