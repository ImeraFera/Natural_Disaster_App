import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const initialState = {
  isLoading: false,
  disasterHistories: [],
  helpForms: [],
  missingForms: [],
  allReports: [],
  error: null,
};

export const getAllHavocReports = createAsyncThunk(
  'user/getAllReports',
  async () => {
    try {
      const snapshot = await firestore().collection('havoc_reports').get();
      const allReports = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      return allReports;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

export const getMissingForms = createAsyncThunk(
  'app/getMissingForms',
  async () => {
    try {
      const snapshot = await firestore().collection('missing_forms').get();
      const missingForms = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      return missingForms;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getHelpForms = createAsyncThunk('app/getHelpForms', async () => {
  try {
    const snapshot = await firestore().collection('support_forms').get();
    const helpForms = snapshot.docs.map(doc => doc.data());

    return helpForms;
  } catch (error) {
    console.log(error);
  }
});

export const getDisasterHistories = createAsyncThunk(
  'app/getDisasterHistories',
  async () => {
    try {
      const snapshot = await firestore()
        .collection('disaster_histories')
        .orderBy('date', 'asc')
        .get();
      const histories = snapshot.docs.map(doc => doc.data());

      console.log(histories);
      return histories;
    } catch (error) {
      throw error;
    }
  },
);

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDisasterHistories.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDisasterHistories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.disasterHistories = action.payload;
      })
      .addCase(getDisasterHistories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getHelpForms.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getHelpForms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.helpForms = action.payload;
      })
      .addCase(getHelpForms.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getMissingForms.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMissingForms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.missingForms = action.payload;
      })
      .addCase(getMissingForms.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getAllHavocReports.pending, state => {
        state.status = 'loading';
      })
      .addCase(getAllHavocReports.fulfilled, (state, {payload}) => {
        state.status = 'succeeded';
        state.allReports = payload;
      })
      .addCase(getAllHavocReports.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default appSlice.reducer;
