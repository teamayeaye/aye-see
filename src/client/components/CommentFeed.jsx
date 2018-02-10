import React from 'react';
import Paper from 'material-ui/Paper';

const Comment = (props) => {
  console.log('comment daty',props.datum)
  return (
    <Paper>
      <img src={props.datum.img} style={{height:100}}/>
      {
        props.datum.caption
      }
    </Paper>
  )
}


const CommentFeed = (props) => {
  
//  let arr = props.comments.map(c => <Comment datum={c}/>)
  
  return (
    <div>
      {
        props.comments.map(c => <Comment datum={c}/>)
    }
    </div>
  )
}

export default CommentFeed;
