import React, {useEffect} from "react";
import {getUsers} from "../api/users";
import {Link} from "react-router-dom";

export function UsersList({users, handlePostsClick, setUsers}) {
  useEffect(() => {
    getUsers()
        .then(setUsers)
  }, [])

  return (
      <ul className={"users-list"}>
        {users && users.map(user => (
            <li key={user.id}>
              {user.name}
              <Link to={`./posts/${user.id}`} target="_blank">
                <button type="button" onClick={() => handlePostsClick()}>
                  Пости
                </button>
              </Link>

              <button type="button" onClick={() => {
              }}>
                Альбоми
              </button>
            </li>
        ))}
      </ul>
  )
}
