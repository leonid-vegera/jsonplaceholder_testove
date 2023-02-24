import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUsers} from "../../api/users";

const initialState = {
  usersList: [],
  loading: false,
  error: '',
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // set: (state, action) => {
    //   console.log('--state', state)
    //   console.log('--action', action)
    //   state.users = action.payload;
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending , (state) => {
      state.loading = true;
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.usersList = action.payload;
      state.loading = false;
    })
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
      state.error = "Some error occurred. Please try later";
    })
  }
})

export default usersSlice.reducer;
export const { actions } = usersSlice.actions;

export const fetchUsers = createAsyncThunk('users/fetch', () => {
  return getUsers();
})

