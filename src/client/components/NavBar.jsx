import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import HomeIcon from './HomeIcon.jsx'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import HomePageContainer from './HomePageContainer.jsx';

function handleClick() {
    alert('onClick triggered on the title component');
}

const styles = {
    title: {
        cursor: 'pointer',
    },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const NavBar = () => (
    <AppBar
        title={<Link to="commentfeed"> <span style={styles.title}>Welcome username!</span></Link>}
        iconElementLeft={<HomeIcon><NavigationClose /></HomeIcon>}
        iconElementRight={<Link to="/"><FlatButton label="Logout" /></Link>}
    />
);

export default NavBar;