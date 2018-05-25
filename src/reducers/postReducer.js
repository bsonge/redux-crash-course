import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [], //represents posts from action
  item: {}, //represents the single post we add
}

export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      }
    case NEW_POST:  //since we are using jsonplaceholder, it doesnt actually add the new item to the database so we can't just re-fetch our items; return new item, push that onto the post property of the post state
      return {
        ...state,
        item: action.payload,
      }
    default:
      return state;
  }
}
