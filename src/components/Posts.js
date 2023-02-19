import React, {useEffect, useState} from "react";
import {useMatch} from "react-router-dom";
import {getPosts} from "../api/posts";

export function Posts() {
  const [posts, setPosts] = useState([]);
  const match = useMatch('posts/:userId')
  const userId = +match.params.userId;

  // console.log('users', users)

  useEffect(() => {
    getPosts()
        .then(posts => {
          return setPosts(posts.filter(post => post.userId === userId))
        });
    // handlePosts()
  }, [])

  return (
      <>
        <h1>
          Posts of #{userId} user
        </h1>
        <ul>
          {posts.map(post => (
              <li key={post.id}>
                <h2>
                  {post.title}
                </h2>
                <article>
                  {post.body}
                </article>
              </li>
          ))}
        </ul>
      </>
  )
}
