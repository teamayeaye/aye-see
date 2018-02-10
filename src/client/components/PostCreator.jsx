import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const PostCreator = (props) => (
  <div id='postCreator'>
    <h2>New Post</h2>
    <div>
      <TextField
        floatingLabelText="title"
        id="titleInput"
        autoFocus={true} />
      <RaisedButton
        containerElement='label' // <-- Just add me!
        label='Choose Image'>
        <input type="file" style={{ display: 'none', margin:15 }} />
      </RaisedButton>
    </div>
    <div>
      <RaisedButton id="postSubmitButton" onClick={props.submitPost} label="Submit Post" primary={true} style={{ margin: 11 }} />
    </div>
  </div >
);

export default PostCreator;