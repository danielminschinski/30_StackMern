import { connect } from 'react-redux';
import { getRandomPost, loadRandomPostRequest } from '../../../redux/postsRedux';
import { getRequest } from '../../../redux/requestReducer';
import RandomPost from './RandomPost';

const mapStateToProps = state => ({
  randomPost: getRandomPost(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadRandomPost: () => dispatch(loadRandomPostRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RandomPost);