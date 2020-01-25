import React from 'react';
import { PropTypes } from 'prop-types';
import PostForm from '../PostForm/PostFormContainer';
import Spinner from '../../common/Spinner/Spinner';

class EditPost extends React.Component {
  componentDidMount() {
    const { loadEditPost, id } = this.props;
    loadEditPost(id);
  }

  componentWillUnmount = () => {
    const { resetRequestObj } = this.props;
    resetRequestObj('requestPost');
  };

  render() {
    const { postToEdit, request } = this.props;
    const { success } = request.requestPost;
    return <div>{(success && <PostForm postToEdit={postToEdit} />) || <Spinner />}</div>;
  }
}

EditPost.propTypes = {
  loadEditPost: PropTypes.func.isRequired,
};

export default EditPost;