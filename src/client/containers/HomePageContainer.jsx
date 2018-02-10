import React, { Component } from 'react';
import ImageGrid from '../components/ImageGrid.jsx';
import NavBar from '../components/NavBar.jsx';
import PostCreator from '../components/PostCreator.jsx';

class HomePageContainer extends Component {
    constructor() {
        super();
        this.state = {};
        this.state.postList = [];

        this.renderPosts = this.renderPosts.bind(this);
        this.submitPost = this.submitPost.bind(this);
        // this.routeToPost = this.routeToPost.bind(this);
    };

    renderPosts(data) {
        const stateCopy = {};
        stateCopy.postList = data;
        console.log(data);
        this.setState({ postList: stateCopy.postList });
    }

    // routeToPost(post_id){
    //     console.log('gonna route you to post ' + post_id);
    // }

    submitPost(){
        fetch('/newPost', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
        .then((res) => this.props.renderPosts(res));
    }

    render() {
        return (
            <div>
                <NavBar />
                <ImageGrid
                    postList={this.state.postList}
                    renderPosts={this.renderPosts}
                    submtiPost={this.submitPost}
                // routeToPost={this.routeToPost}
                />
                <PostCreator />
            </div>
        );
    }
}

export default HomePageContainer;