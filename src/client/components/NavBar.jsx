import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import HomeIcon from './HomeIcon.jsx'

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
        title={<span style={styles.title}>Welcome username!</span>}
        onTitleClick={handleClick}
        iconElementLeft={<HomeIcon><NavigationClose /></HomeIcon>}
        iconElementRight={<FlatButton label="Logout" />}
    />
);

export default NavBar;