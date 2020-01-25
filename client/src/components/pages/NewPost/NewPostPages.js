import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import PostForm from '../../features/PostForm/PostFormContainer';

const NewPostPage = () => (
    <div>
      <PageTitle>NewPost</PageTitle>
      <PostForm />
    </div>
  );
  
  export default NewPostPage;