import React, {useEffect, useState} from "react";
import {getUsers} from "../../api/users";
import {Link, useSearchParams} from "react-router-dom";
import './UsersList.scss';
import {Loader} from "../../utils/Loader";

export function UsersList({users, setUsers, setActive}) {

  useEffect(() => {
    getUsers()
        .then(setUsers)
  }, [])

  return (
    <div className="users-list">
      {!users.length
        ? (<Loader />)
        : (
            <>
              <h1 className="users-list__title">Users from server</h1>
              <ul className={"users-list__content"}>
                {users && users.map(user => (
                  <li key={user.id} className="users-list__item">
                    <div>
                      {user.name}
                    </div>

                    <div className="users-list__buttons">
                      <Link to={`./posts?userId=${user.id}`} target="_blank">
                        <button type="button" className="users-list__button">
                          Posts
                        </button>
                      </Link>

                      <Link to={`./albums?userId=${user.id}`}>
                        <button type="button" className="users-list__button" onClick={() => setActive(true)}>
                          Albums
                        </button>
                      </Link>
                    </div>
                    </li>
                ))}
              </ul>
            </>
          )
      }
    </div>
  )
}
