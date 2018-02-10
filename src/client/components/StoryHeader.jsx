import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const StoryHeader = () => (
    <Card>
        <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="images/jsa-128.jpg"
        />
        <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
            <img src="https://i.pinimg.com/736x/ce/80/cb/ce80cbc0cba87cf4b4e7c15b055b3bc4--shih-tzu-puppy-shihtzu.jpg" alt="" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
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