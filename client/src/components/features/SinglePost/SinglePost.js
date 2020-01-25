import React from 'react';
import { PropTypes } from 'prop-types';
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';
import { withRouter } from 'react-router-dom';
import { BASE_URL } from '../../../config';
import Post from '../Post/PostContainer';
import Spinner from '../../common/Spinner/Spinner';
import NotFound from '../../pages/NotFound/NotFound';

class SinglePost extends React.Component {
  componentDidMount() {
    const { loadCurentPost, id } = this.props;
    loadCurentPost(id);
  }

  render() {
    const { curentPost, request, location } = this.props;
    const { pending } = request.requestPost;
    return (
      <div>
        {(pending && <Spinner />) ||
          (curentPost && (
            <>
              <Post post={curentPost} isSingle />
              <FacebookProvider appId="441193243206112">
                <Comments href={`${BASE_URL}${location.pathname}`} />
                <ShareButton href={`${BASE_URL}${location.pathname}`}>Share</ShareButton>
              </FacebookProvider>
            </>
          )) || <NotFound />}
      </div>
    );
  }
}

SinglePost.propTypes = {
  loadCurentPost: PropTypes.func.isRequired,
};

export default withRouter(props => <SinglePost {...props} />);