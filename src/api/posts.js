import {request} from "./api";

export const getPosts = (userId) => {
  return request('/posts')
      .then(posts => posts.filter(post => post.userId === userId));
}
