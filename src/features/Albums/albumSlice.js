import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAlbums} from "../../api/albums";
import {endpoints} from "../../api/endpoints";
import {getExtraReducers} from "../../utils/getExtraReducers";

const initialState = {
  list: [],
  loading: false,
  error: '',
}
const {albums} = endpoints;
export const fetchAlbums = createAsyncThunk(
    `${albums}/fetch`,
    async (userId) => {
      return await getAlbums(userId);
    })

export const albumSlice = createSlice({
  name: albums,
  initialState,
  reducers: {},
  extraReducers: getExtraReducers(fetchAlbums)
})

export default albumSlice.reducer;
export const {actions} = albumSlice.actions;

