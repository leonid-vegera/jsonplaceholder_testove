import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getPosts} from "../../api/posts";
import {endpoints} from "../../api/endpoints";
import {getExtraReducers} from "../../utils/getExtraReducers";

const initialState = {
  list: [],
  loading: false,
  error: '',
}
const {posts} = endpoints;
export const fetchPosts = createAsyncThunk(
    `${posts}/fetch`,
    async (userID) => {
      return await getPosts(userID);
    }
)

export const postsSlice = createSlice({
  name: posts,
  initialState,
  reducers: {},
  extraReducers: getExtraReducers(fetchPosts),
})

export default postsSlice.reducer;
export const { actions } = postsSlice.actions;
