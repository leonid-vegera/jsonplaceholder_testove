import {request} from "./api";
import {endpoints} from "./endpoints";

export const getUsers = () => {
  const {users} = endpoints;
  return request(`/${users}`)
}
