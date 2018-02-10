import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import ImageGrid from './ImageGrid.jsx';
import NavBar from './NavBar.jsx';
import HomePageContainer from '../containers/HomePageContainer.jsx';
import StoryCommentPageContainer from '../containers/StoryCommentPageContainer.jsx';
import StoryHeader from './StoryHeader.jsx';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

/* The following is a private routing adaptation of React Router to handle 
authentication on the front end. The goal is to render certain components 
only if the user has been properly authenticated.
We struggled with this function - it doesn't work yet */
// const PrivateRoute = ({component: NewComponent, props}) => {
//   console.log('PROPS', props);
//   return (<Route render={ props => {
    
//     if (props.isLoggedIn) return <NewComponent {...props} />;

//     return (<Redirect to={{
//             pathname: '/',
//             state: { from: props.location }
//           }}
//         />);
//       }
//     } />);
// };  

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
                <Route exact path="/" component={Login} handleAuthentication={this.handleAuthentication} />
                <Route path="/signup" component={Signup} />
                <Route path="/home" component={HomePageContainer} isLoggedIn = {this.state.isLoggedIn} />
                <Route path="/commentFeed/:post_id" component={StoryCommentPageContainer} />
            </MuiThemeProvider>

        </Router>

    )
  }
}

export default App;
