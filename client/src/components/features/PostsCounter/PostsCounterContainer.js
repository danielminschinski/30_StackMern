import { connect } from 'react-redux';
import { getPostsCount } from '../../../redux/postsRedux';
import { getRequest } from '../../../redux/requestReducer';
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
  count: getPostsCount(state),
  request: getRequest(state),
});

export default connect(mapStateToProps)(PostsCounter);