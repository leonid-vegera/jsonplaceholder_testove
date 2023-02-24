import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import React, {useEffect} from "react";
import {fetchPosts} from "../../features/Posts/postsSlice";
import {fetchUsers} from "../../features/UsersList/usersSlice";
import {Template} from "../Template";
import {fetchAlbums} from "../../features/Albums/albumSlice";

export function CommonPattern({title}) {
  const dispatch = useDispatch();
  const {list, loading, error} = useSelector(state => state[title]);
  const {usersList} = useSelector(state => state.users);
  const [searchParams, setSearchParams] = useSearchParams('');
  const userId = +searchParams.get('userId');
  const user = usersList.find(user => user.id === userId);
  const name = user?.name;
  const username = user?.username;

  useEffect(() => {
    if (title === 'posts') {
      dispatch(fetchPosts(userId));
      dispatch(fetchUsers());
    }
    if (title === 'albums') {
      dispatch(fetchAlbums(userId));
    }
  }, [userId])

  return (
    <div className={title}>
      <Template
        userId={userId}
        data={list}
        title={title}
        name={name}
        username={username}
        isLoading={loading}
        error={error}
      />
    </div>
  );
}
