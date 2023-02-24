import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUsers} from "../../api/users";
import {endpoints} from "../../api/endpoints";
import {getExtraReducers} from "../../utils/getExtraReducers";

const initialState = {
  list: [],
  loading: false,
  error: '',
}
const {users} = endpoints;
export const fetchUsers = createAsyncThunk(`${users}/fetch`, async () => {
  return await getUsers();
})

export const usersSlice = createSlice({
  name: users,
  initialState,
  reducers: {},
  extraReducers: getExtraReducers(fetchUsers),
})

export default usersSlice.reducer;
export const { actions } = usersSlice.actions;



