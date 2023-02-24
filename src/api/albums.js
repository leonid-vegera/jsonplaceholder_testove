import {request} from "./api";

export const getAlbums = (userId) => {
  return request('/albums')
      .then(albums => albums.filter(album => album.userId === userId))
}
