import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const initialState = {};

export const saveHavocReport = createAsyncThunk(
  'saveHavocReport',
  async values => {
    try {
      console.log(values);
    } catch (error) {}
  },
);

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export default appSlice.reducer;
