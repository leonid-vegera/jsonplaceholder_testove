import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/UsersList/usersSlice';
import postsReducer from '../features/Posts/postsSlice';
import albumsReducer from '../features/Albums/albumSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    albums: albumsReducer,
  },
  devTools: true,
});
