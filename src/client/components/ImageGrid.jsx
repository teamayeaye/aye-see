import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import HomePageContainer from './HomePageContainer.jsx';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 800,
        height: 600,
        overflowY: 'auto',
    },
};

class ImageGrid extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        if (this.props.postList.length === 0) {
            fetch('/getAllPosts')
            .then(res => res.json())
            .then((res) => this.props.renderPosts(res));
        }
    }

    render() {
        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList} cols={3}
                >
                    <Subheader>Stories</Subheader>
                    {this.props.postList.map((post) => (
                        <Link to={'/commentfeed/'+post.post_id}><GridTile
                            key={post.created_at}
                            title={post.title}
                            post_id={post.post_id}
                            // actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                            // onClick={() => this.props.routeToPost(post.post_id)}
                        >
                            <img src={post.img} />
                        </GridTile></Link>
                    ))}
                </GridList>
            </div>
        );
    }
}

export default ImageGrid;