import { connect } from 'react-redux';
import { getCurentPost, loadCurentPostRequest } from '../../../redux/postsRedux';
import { getRequest } from '../../../redux/requestReducer';
import SinglePost from './SinglePost';

const mapStateToProps = state => ({
  curentPost: getCurentPost(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadCurentPost: id => dispatch(loadCurentPostRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);

