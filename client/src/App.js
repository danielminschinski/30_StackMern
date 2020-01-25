import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

// import routes
import Home from './components/pages/Home/HomePages';
import Posts from './components/pages/Posts/PostsPages';
import SinglePost from './components/pages/SinglePost/SinglePostPages';
import EditPost from './components/pages/EditPost/EditPostPages';
import NewPost from './components/pages/NewPost/NewPostPages';
import Contact from './components/pages/Contact/ContactPages';
import NotFound from './components/pages/NotFound/NotFound';
import RandomPost from './components/pages/RandomPost/RandomPostPage';

const App = () => (
  <MainLayout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/posts/new" component={NewPost} />
      <Route path="/posts/random" component={RandomPost} />
      <Route path="/posts/edit/:id" component={EditPost} />
      <Route path="/posts/:id" component={SinglePost} />
      <Route path="/posts" exact component={Posts} />
      <Route path="/contact" exact component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </MainLayout>
);

export default App;