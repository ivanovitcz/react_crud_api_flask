import { GET_POST_LIST } from "../actions/postAction";
import { GET_POST_DETAIL } from "../actions/postAction";
import { POST_POST_CREATE } from "../actions/postAction";


let initialState = {
  getPostList: false,
  errorPostList: false,
  getPostDetail : false,
  errorPostDetail: false,
  getResponDataPost: false,
  errorResponDataPost: false,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_LIST:
      return {
        ...state,
        getPostList: action.payload.data,
        errorPostList: action.payload.errorMessage,
      };

    case GET_POST_DETAIL:
      return {
        ...state,
        getPostDetail: action.payload.data,
        errorPostDetail: action.payload.errorMessage,
      };

    case POST_POST_CREATE:
      return {
        ...state,
        getResponDataPost: action.payload.data,
        errorResponDataPost: action.payload.errorMessage,
      };

    default:
      return state;
  }
}

export default posts
