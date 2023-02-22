import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {getPosts} from "../../api/posts";
import './Posts.scss'
import {Template} from "../../utils/Template";

export function Posts() {
  const [posts, setPosts] = useState([]);
  // const [userId, setUserId] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams('');
  const userId = +searchParams.get('userId');

  // useEffect(() => {
  //   setUserId(id);
  // }, [])


  useEffect(() => {
    getPosts()
        .then(posts => {
          return setPosts(posts.filter(post => post.userId === userId))
        });
  }, [userId])

  return (
    <div className="posts">
      <Template
        userId={userId}
        data={posts}
        name="Posts"
    />
    </div>
  );
}
