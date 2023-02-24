import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAlbums} from "../../api/albums";

const initialState = {
  list: [],
  loading: false,
  error: '',
}

export const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    })
    builder.addCase(fetchAlbums.rejected, (state) => {
      state.loading = false;
      state.error = 'Error occurred. Albums can`t be downloaded';
    })
  }
})

export default albumSlice.reducer;
export const {actions} = albumSlice.actions;

export const fetchAlbums = createAsyncThunk('albums/fetch', async (userId) => {
  return await getAlbums(userId);
})
