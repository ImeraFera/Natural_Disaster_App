import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const initialState = {
  name: '',
  address: '',
  birthday: '',
  district: '',
  mail: '',
  province: '',
  tcNo: '',
  tel: '',
  isAuth: false,
  status: '',
  error: '',
  uid: '',
  role: null,
  allReports: [],
};
export const updateUser = createAsyncThunk('user/updateUser', async values => {
  try {
    const uid = auth().currentUser?.uid;

    await firestore().collection('users').doc(uid).update(values);

    const updatedUserDoc = await firestore().collection('users').doc(uid).get();

    return {uid, ...updatedUserDoc.data()};
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const register = createAsyncThunk(
  'user/register',
  async ({mail, password, tcNo}) => {
    try {
      const newUser = await auth().createUserWithEmailAndPassword(
        mail,
        password,
      );
      const uid = newUser.user.uid;

      await firestore()
        .collection('users')
        .doc(uid)
        .set({
          mail,
          tcNo,
          address: '',
          birthday: '',
          district: '',
          province: '',
          tel: '',
          name: mail.split('@')[0],
        });

      const userRef = firestore().collection('users').doc(uid);
      const userDoc = await userRef.get();

      if (!userDoc.exists) {
        throw new Error('User does not exist in Firestore');
      }

      return {uid, ...userDoc.data()};
    } catch (error) {
      throw error;
    }
  },
);

export const login = createAsyncThunk(
  'user/login',
  async ({mail, password}) => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        mail,
        password,
      );
      const uid = userCredential.user.uid;

      const userRef = firestore().collection('users').doc(uid);
      const userDoc = await userRef.get();

      if (!userDoc.exists) {
        throw new Error('User does not exist in Firestore');
      }

      return {uid, ...userDoc.data()};
    } catch (error) {
      console.error('Error signing in: ', error);
      throw error;
    }
  },
);

export const getUser = createAsyncThunk('user/getUser', async uid => {
  try {
    const userRef = firestore().collection('users').doc(uid);
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      throw new Error('User does not exist');
    }
    return userDoc.data();
  } catch (error) {
    console.error('Error getting user: ', error);
    throw error;
  }
});

export const logout = createAsyncThunk('user/logout', async () => {
  await auth().signOut();
});

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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, {payload}) => {
        state.status = 'succeeded';
        state.isAuth = true;
        state.address = payload.address;
        state.birthday = payload.birthday;
        state.district = payload.district;
        state.mail = payload.mail;
        state.name = payload.name;
        state.province = payload.province;
        state.tcNo = payload.tcNo;
        state.tel = payload.tel;
        state.uid = payload.uid;
        console.log('register payload: ', payload);
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(login.pending, state => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, {payload}) => {
        state.status = 'succeeded';
        state.isAuth = true;
        state.address = payload.address;
        state.birthday = payload.birthday;
        state.district = payload.district;
        state.mail = payload.mail;
        state.name = payload.name;
        state.province = payload.province;
        state.tcNo = payload.tcNo;
        state.tel = payload.tel;
        state.uid = payload.uid;
        state.role = payload.role;
        console.log('login payload : ', payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(logout.pending, state => {
        state.status = 'loading';
      })
      .addCase(logout.fulfilled, state => {
        return initialState;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(updateUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, {payload}) => {
        state.status = 'succeeded';
        console.log(payload);
        state.address = payload.address;
        state.birthday = payload.birthday;
        state.district = payload.district;
        state.mail = payload.mail;
        state.name = payload.name;
        state.province = payload.province;
        state.tcNo = payload.tcNo;
        state.tel = payload.tel;
        state.uid = payload.uid;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(getAllHavocReports.pending, state => {
        state.status = 'loading';
      })
      .addCase(getAllHavocReports.fulfilled, (state, {payload}) => {
        state.status = 'succeeded';
        state.allReports = payload;

        console.log(payload);
      })
      .addCase(getAllHavocReports.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default userSlice.reducer;
