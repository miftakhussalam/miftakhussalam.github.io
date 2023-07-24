import { createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from 'jwt-decode';
// import { User } from "./userModel";

export const setUser = createAsyncThunk(`user/setUser`, async (dataUser: any | undefined) => {
  try {
    return dataUser;
  } catch (error) {
    console.log(error)
    return null;
  }
});

export const getAccessToken = createAsyncThunk(`user/getAccessToken`, async (stringToken: string) => {
  try {
    const decodeToken = await jwt_decode(stringToken);
    return decodeToken;
  } catch (error) {
    console.log(error)
    return null;
  }
});
