export const getPosts = ({ posts }) => posts;

export const LOAD_POSTS = createActionName('LOAD_POSTS');

export const loadPosts = payload => ({ payload, type: LOAD_POSTS });

//action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* initial state */

const initialState = [];

/* reducer */

export default function reducer(statePart = initialState, action = {}){
    switch(action.type){
        case LOAD_POSTS:
            return [ ...action.payload ];
        default:
            return statePart;
    }
};