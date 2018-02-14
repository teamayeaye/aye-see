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
      <TextField
        floatingLabelText="url"
        id="linkInput" />
      <RaisedButton
        containerElement='label'
        label='Choose Image'>
        <input type="file" id='imageInput' style={{ display: 'none', margin:15 }} />
      </RaisedButton>
    </div>
    <div>
      <RaisedButton
        id="postSubmitButton"
        onClick={() => {
          let data = new FormData();
          data.append('user_id', 9);
          data.append('title', document.getElementById('titleInput').value);
          data.append('link', document.getElementById('linkInput').value);
          data.append('photo', document.getElementById('imageInput').files[0]);
          props.submitPost(data);
        }}

        label="Submit Post"
        primary={true}
        style={{ margin: 11 }} />
    </div>
  </div >
);

export default PostCreator;