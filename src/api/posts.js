import {request} from "./api";
import {endpoints} from "./endpoints";

export const getPosts = (userId) => {
  const {posts} = endpoints;
  return request(`/${posts}`)
      .then(posts => posts.filter(post => post.userId === userId));
}
