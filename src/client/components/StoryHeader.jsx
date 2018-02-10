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
          overlay={<CardTitle title={props.post.title} subtitle="Overlay subtitle" />}
        >
          <img src={props.post.img} alt="" />
        </CardMedia>
        <CardTitle title={props.post.title} subtitle="Card subtitle" />
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
        <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
        </CardActions>
    </Card>
);

export default StoryHeader;
