import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const StoryHeader = (props) => (
    <Card>
        <CardHeader
          title={`User:${props.post.user_id}`}
            subtitle="Subtitle"
            avatar="images/jsa-128.jpg"
        />
        <CardMedia
          overlay={<CardTitle title={props.post.title} />}
        >
          <img src={`http://localhost:3000/${props.post.img}`} alt="" />
        </CardMedia>
        <CardTitle title={props.post.title} subtitle="Card subtitle" />
        <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
        </CardActions>
    </Card>
);

export default StoryHeader;
