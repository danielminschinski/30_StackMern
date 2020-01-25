import { connect } from 'react-redux';
import { getEditPost, loadEditPostRequest } from '../../../redux/postsRedux';
import { getRequest, resetRequestObj } from '../../../redux/requestReducer';
import EditPost from './EditPost';

const mapStateToProps = state => ({
  postToEdit: getEditPost(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadEditPost: id => dispatch(loadEditPostRequest(id)),
  resetRequestObj: typeRequest => dispatch(resetRequestObj(typeRequest)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPost);