import {request} from "./api";

export const getPosts = () => {
  return request('/posts')
}
