import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

import PostsList from '../PostsList/PostsList';

import Spinner from '../../common/Spinner/Spinner';
//import { request } from 'express';
import Alert from '../../common/Alert/Alert';

class Posts extends React.Component{

    componentDidMount(){
        const { loadPosts } = this.props;
        loadPosts();
    }

    render(){
        const { posts, request } = this.props;

        if(request.pending === false && request.error !== null && posts.length > 0){
            return <Alert variant='error' children={''}>Error: {request.error}</Alert>
        } else if(request.pending === false && request.success === true && posts.length > 0){
            return (
                <div>
                    <PostsList posts={posts} />
                </div>
            )
        } else if(request.pending === true || request.success === null){
            return <Spinner />
        } else if(request.pending === false && request.success === true && posts.length === 0){
            return <Alert variant='info' children={''}>No posts</Alert>
        };
    }
};

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ),
    loadPosts: PropTypes.func.isRequired,
};


export default withRouter(props => <Posts {...props} />);
