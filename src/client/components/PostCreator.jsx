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
          console.log(document.getElementById('imageInput').files[0]);
          let data = new FormData();
          data.set('user_id', 1);
          data.set('title', document.getElementById('titleInput').value);
          data.set('link', document.getElementById('linkInput').value);
          data.set('photo', document.getElementById('imageInput').files[0]);
          console.log(data);
          props.submitPost(data);
        }}
        
        // props.submitPost(new FormData().set({
        //   user_id: 1,
        //   title: document.getElementById('titleInput').value,
        //   link: document.getElementById('linkInput').value,
        //   img: document.getElementById('imageInput').files
        // }))}
        label="Submit Post"
        primary={true}
        style={{ margin: 11 }} />
    </div>
  </div >
);

export default PostCreator;