import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {getAlbums} from "../../api/albums";
import {Template} from "../../utils/Template";

export function Albums() {
  const [albums, setAlbums] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const userId = +searchParams.get('userId');

  useEffect(() => {
    getAlbums()
        .then(albums => {
          return setAlbums(albums.filter(album => album.userId === userId))
        });
  }, [userId])

  return (
    <Template
      userId={userId}
      data={albums}
      name="Albums"
    />
  )
}
