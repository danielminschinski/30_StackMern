import './Post.scss';

import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import PageTitle from '../../common/PageTitle/PageTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import Rating from '../../common/Rating/Rating';
import cutText from '../../../utils/cutText';

class Post extends React.Component {
  constructor(props) {
    super(props);
    const { post } = this.props;
    this.state = {
      ratingValue: post.rating,
    };
  }

  handleAddRating = () => {
    const { ratingChange, post } = this.props;
    const { ratingValue } = this.state;
    ratingChange(post, 'add');
    const value = ratingValue + 1;
    this.setState({ ratingValue: value });
  };

  handleSubRating = () => {
    const { ratingChange, post } = this.props;
    const { ratingValue } = this.state;
    ratingChange(post, 'sub');
    if (ratingValue > 0) {
      const value = ratingValue - 1;
      this.setState({ ratingValue: value });
    }
  };

  render() {
    const { handleSubRating, handleAddRating, props } = this;
    const { post, isSingle } = props;
    const { id, title, content, author } = post;
    const { ratingValue } = this.state;

    return (
      <article className="post-summary">
        {isSingle && <PageTitle>{title}</PageTitle>}
        {!isSingle && <SmallTitle>{title}</SmallTitle>}
        <p>
          Author: {author}{' '}
          <Rating rating={ratingValue} ratingSub={handleSubRating} ratingAdd={handleAddRating} />
        </p>
        <HtmlBox>{isSingle ? content : cutText(content, 50)}</HtmlBox>
        {!isSingle && (
          <>
            <Button variant="primary">
              <Link to={`/posts/${id}`}>Read more</Link>
            </Button>
            <Button variant="primary">
              <Link to={`/posts/edit/${id}`}>Edit</Link>
            </Button>
          </>
        )}
      </article>
    );
  }
}

Post.defaultProps = {
  id: '',
  title: '',
  content: '',
  rating: 0,
};

Post.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  rating: PropTypes.number,
};

export default Post;