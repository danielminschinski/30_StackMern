import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// import reducers
import posts from './postsRedux';
import request from './requestReducer';

// combine reducers
const rootReducer = combineReducers({
  posts,
  request,
});

// create store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;