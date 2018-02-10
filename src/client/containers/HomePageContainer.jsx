import React, { Component } from 'react';
import ImageGrid from '../components/ImageGrid.jsx';
import NavBar from '../components/NavBar.jsx';

const HomePageContainer = (props) => {
    return (
        <div>
            <NavBar />
            <ImageGrid />
        </div>
    )
}

export default HomePageContainer;