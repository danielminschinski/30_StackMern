import axios from 'axios';
import { API_URL } from '../config';

//SELECTORS
export const getPosts = ({ posts }) => posts;
export const countPosts = ({ posts }) => posts.length;

//action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;


//ACTIONS
export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const loadPosts = payload => ({ payload, type: LOAD_POSTS });


// initial state

const initialState = [];

// reducer

export default function reducer(statePart = initialState, action = {}){
    switch(action.type){
        case LOAD_POSTS:
            return [ ...action.payload ];
        default:
            return statePart;
    }
};

// thunks
export const loadPostsRequest = () => {
    return async dispatch => {
        
        try {
            let res = await axios.get(`${API_URL}/posts`);
            dispatch(loadPosts(res.data));
        } catch(e){
            console.log(e.message);
        }
    };
};