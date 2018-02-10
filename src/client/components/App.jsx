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

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route render={ props => {
    
    if (props.isLoggedIn) return <Component {...props} />;

    return (<Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />);
      }
      } />;
};  

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userId: null
    }
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  handleAuthentication(userId) {
    this.setState({
      userId,
      isLoggedIn: true
    });
  }

  render() {
    return (
        <Router>
            <MuiThemeProvider>
                <Route exact path="/" component={LoginDisplay} handleAuthentication={this.handleAuthentication} />
                <Route path="/signup" component={SignupDisplay} />
                <PrivateRoute path="/home" component={HomePageContainer} isLoggedIn = {this.state.isLoggedIn} />
                <PrivateRoute path="/commentFeed/:post_id" component={StoryCommentPageContainer} />
            </MuiThemeProvider>

        </Router>

    )
  }
}

export default App;
