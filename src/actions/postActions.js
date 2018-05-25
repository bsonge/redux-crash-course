import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => (dispatch) => { //dispatch is like a resolver in a promise
    fetch('https://jsonplaceholder.typicode.com/posts')  //fetching from jsonplaceholder
      .then(result => result.json())  //return as a json
      .then(posts => {
        console.log(posts);
        dispatch({
          type: FETCH_POSTS,
          payload: posts,
        });
      }); //log it
};

export const createPost = (postData) => (dispatch) => { //dispatch is like a resolver in a promise
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(post => dispatch({
    type: NEW_POST,
    payload: post,
    }));
}
