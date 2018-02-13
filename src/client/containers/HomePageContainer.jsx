import React, { Component } from 'react';
import ImageGrid from '../components/ImageGrid.jsx';
import NavBar from '../components/NavBar.jsx';
import PostCreator from '../components/PostCreator.jsx';

class HomePageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.postList = [];

        this.renderPosts = this.renderPosts.bind(this);
        this.submitPost = this.submitPost.bind(this);
        // this.routeToPost = this.routeToPost.bind(this);
    };

    renderPosts(data) {
        const stateCopy = {};
        stateCopy.postList = data;
        this.setState({ postList: stateCopy.postList });
    }

    // routeToPost(post_id){
    //     console.log('gonna route you to post ' + post_id);
    // }

    submitPost(data){
        fetch('/newPost', {
            method: 'POST',
            body: data
        })
        .then(res => res.json())
        .then((res) => this.renderPosts(res));
    }

    render() {
        return (
            <div>
                <NavBar />
                <ImageGrid
                    postList={this.state.postList}
                    renderPosts={this.renderPosts}
                // routeToPost={this.routeToPost}
                />
                <PostCreator
                    submitPost={this.submitPost} />
            </div>
        );
    }
}

export default HomePageContainer;