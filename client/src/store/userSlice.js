import { createSlice } from "@reduxjs/toolkit";

  const initialState = {
    user: null,
    loading: false,
    error: null,
    token: null,
  };

  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
      setToken: (state, action) => {
        state.token = action.payload;
      },
      setLogout: (state , action) => {
        state.user = null;
        state.loading = false;
        state.error = null;
        state.token = action.payload;
      } 
    },
  });

  export const { setUser, setLoading, setError, setToken , setLogout } = userSlice.actions; 
  export default userSlice.reducer;