import React, { Component } from 'react';
import ImageGrid from '../components/ImageGrid.jsx';
import NavBar from '../components/NavBar.jsx';

class HomePageContainer extends Component {
    constructor() {
        super();
        this.state = {};
        this.state.postList = [];
        
        this.renderPosts = this.renderPosts.bind(this);
    };

    renderPosts() {
        
    }


    render() {
        return (
            <div>
                <NavBar />
                <ImageGrid postList={this.state.postList} />
            </div>
        );
    }
}

export default HomePageContainer;