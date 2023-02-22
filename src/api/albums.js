import {request} from "./api";

export const getAlbums = () => {
  return request('/albums')
}
