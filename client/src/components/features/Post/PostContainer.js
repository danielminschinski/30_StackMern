import { connect } from 'react-redux';
import { ratingRequest } from '../../../redux/postsRedux';
import Post from './Post';

const mapDispatchToProps = dispatch => ({
  ratingChange: (post, ratingType) => dispatch(ratingRequest(post, ratingType)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Post);