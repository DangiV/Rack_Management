import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import MakeRequest from '../../Config/MakeRequest'

const initialState = {
  users: [],
  status: "Loaded",
  error: null,
}

export const adminLogin = createAsyncThunk('LoginUser', async (userDetails, { rejectWithValue }) => {
  try {
    //user enter password will get convert in hash 
    const encrypted_password = await MakeRequest('post', "/v1/user/get_encrypted_password", { password: userDetails.password });
    if (encrypted_password.hasError == true) {
      return rejectWithValue(encrypted_password.error.message);
    } else {
      const response = await MakeRequest("post", "/api/v1/administration/Login", { email: userDetails.email, password: encrypted_password.data });
      if (response.hasError === true) {
        return rejectWithValue(encrypted_password.error.message);
      } else {
        return (response);
      }
    }
  } catch (error) {
    return rejectWithValue(error.data.error);
  }
})

const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.status = "loading"
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.status = "success";
        const ResponseData = action.payload.data;
        state.users.push(ResponseData);
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  }
})

export default adminSlice.reducer