import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getPosts} from "../../api/posts";

const initialState = {
  list: [],
  loading: false,
  error: '',
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    })
    builder.addCase(fetchPosts.rejected, (state) => {
      state.loading = false;
      state.error = "Some error occurred. Posts can`t be downloaded";
    })
  }
})

export default postsSlice.reducer;
export const { actions } = postsSlice.actions;

// export const fetchPosts = createAsyncThunk('posts/fetch', (userID) => {
//   return getPosts(userID);
// })

export const fetchPosts = createAsyncThunk(
    'posts/fetch',
    async (userID) => {
      return await getPosts(userID);
    }
)
