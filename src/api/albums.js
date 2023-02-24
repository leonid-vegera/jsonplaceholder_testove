import {request} from "./api";
import {endpoints} from "./endpoints";

export const getAlbums = (userId) => {
  const {albums} = endpoints;
  return request(`/${albums}`)
      .then(albums => albums.filter(album => album.userId === userId))
}
