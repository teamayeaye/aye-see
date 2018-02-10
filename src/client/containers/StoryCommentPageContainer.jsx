import React, { Component } from 'react';
import StoryHeader from '../components/StoryHeader.jsx';
import CommentFeed from '../components/CommentFeed.jsx';

export default class StoryCommentPageContainer extends Component{

  constructor(){
    super()
    this.state = {comments:[]}
  }

  componentDidMount(){
    fetch('/1').then(res => res.json())
      .then(data => {
        this.setState({comments:data})
      })
  }

  render(){
    return (
      <div>
        <StoryHeader />
        <CommentFeed comments={this.state.comments}/>
      </div>
    )
  } 
   


}


