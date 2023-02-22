import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {getAlbums} from "../../api/albums";
import {Template} from "../../utils/Template";

export function Albums() {
  const [albums, setAlbums] = useState([]);
  const [userId, setUserId] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams('');
  const id = +searchParams.get('userId');

  useEffect(() => {
    setUserId(id);
  }, [])

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
