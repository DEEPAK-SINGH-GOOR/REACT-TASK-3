import { DELETE_BLOG, GET_BLOGS, LOADING, POST_BLOGS } from "./ActionType";

let initialState = {
  blogs: [],
  isLoading: false,
};

export const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BLOGS:
      return {
        ...state,
        blogs: payload,
        isLoading: false,
      };

    case POST_BLOGS:
      return {
        ...state,
        blogs: [...state.blogs, payload],
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog.id != payload),
      };

    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
