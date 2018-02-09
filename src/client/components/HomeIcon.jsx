import React from 'react';
import NavBar from './NavBar.jsx'
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const HomeIcon = () => (
    <div>
        <IconButton tooltip="Font Icon">
            <FontIcon className="muidocs-icon-action-home" />
        </IconButton>

        <IconButton tooltip="SVG Icon">
            <ActionHome />
        </IconButton>

        <IconButton
            iconClassName="material-icons"
            tooltip="Ligature">
        </IconButton>
    </div>
);

export default HomeIcon;