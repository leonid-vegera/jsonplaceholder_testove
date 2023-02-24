import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import './UsersList.scss';
import {Loader} from "../../utils/Loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from './usersSlice';

export function UsersList({setActive}) {
  const dispatch = useDispatch();
  const { usersList, loading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const Component = () => {
    if (!!loading || !usersList) {
      return <Loader />
    }

    if (!!error) {
      return error;
    }

    return (
        <>
          <h1 className="users-list__title">Users from server</h1>
          <ul className={"users-list__content"}>
            {usersList && usersList.map(user => (
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

  return (
    <div className="users-list">
      <Component />
    </div>
  )
}
