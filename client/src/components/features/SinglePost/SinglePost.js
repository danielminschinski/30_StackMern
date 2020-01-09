import React from 'react';
import { PropTypes } from 'prop-types';

import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import PageTitle from '../../common/PageTitle/PageTitle';

class SinglePost extends React.Component {
    componentDidMount(){
        const { resetRequest, loadSinglePost, match } = this.props;
        loadSinglePost(match.params.id);
        resetRequest();
    }

    render(){
        const { posts, request } = this.props;

        if(posts === null && request.pending === true){
            return <Spinner />
        }else if(posts === null){
            return <Alert variant='error' children=''>Ups! Page not found</Alert>
        };

        if(request.pending === true || request.success === null ){
            return <Spinner />
        } else if(request.pending === false && request.error != null){
            return <Alert variant='error' children=''>{request.error}</Alert>
        } else if(request.pending === false && request.success === true && posts.length !== 0) {
            return (
                <div>
                    <PageTitle>{posts.title}</PageTitle>
                    <HtmlBox>{posts.content}</HtmlBox>
                </div>
            );
        };
    }
};

SinglePost.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ),
    loadSiglePost: PropTypes.func.isRequired,
    resetRequest: PropTypes.func.isRequired,
};

export default SinglePost; 