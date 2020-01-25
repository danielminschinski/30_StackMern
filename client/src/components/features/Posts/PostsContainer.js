import { connect } from 'react-redux';
import {
  getPosts,
  loadPostsByPageRequest,
  getPages,
  getCurentPages,
} from '../../../redux/postsRedux';
import { getRequest } from '../../../redux/requestReducer';
import Posts from './Posts';

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
  pages: getPages(state),
  presentPage: getCurentPages(state),
});

const mapDispatchToProps = dispatch => ({
  loadPostsByPage: (page, postsPerPage) => dispatch(loadPostsByPageRequest(page, postsPerPage)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Posts);