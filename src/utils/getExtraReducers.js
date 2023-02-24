export function getExtraReducers(fetchThunk) {
  return (builder) => {
    builder.addCase(fetchThunk.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchThunk.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    })
    builder.addCase(fetchThunk.rejected, (state) => {
      state.loading = false;
      state.error = "Error occurred";
    })
  };
}
