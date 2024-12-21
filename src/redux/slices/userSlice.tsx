import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import store from '../store';
import storage from '@react-native-firebase/storage';

const initialState = {
  name: '',
  lastName: '',
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
  image: null,
};

export const deleteMissingForm = createAsyncThunk(
  'user/deleteMissingForm',
  async id => {
    try {
      await firestore().collection('missing_forms').doc(id).delete();
      //   return navigation.navigate('MissingDeclarations_Screen');

      return Toast.show({
        type: 'success',
        position: 'top',
        text1: 'İşlem Başarılı',
        text2: 'Kayıp ilanı başarıyla silindi.',
      });
    } catch (error) {
      console.error('Silme işlemi sırasında hata oluştu:', error);
      return Toast.show({
        type: 'error',
        position: 'top',
        text1: 'İşlem Başarısız',
        text2: 'Silme işlemi sırasında hata oluştu.',
      });
    }
  },
);

export const createMissingForm = createAsyncThunk(
  'user/createMissingForm',
  async values => {
    try {
      const {
        address,
        age,
        contact1,
        date,
        details,
        gender,
        lastPlace,
        name,
        prize,
        image,
      } = values;

      const user = store.getState().user;

      let imageUrl = '';
      const fileName = `${Date.now()}_${name}.jpg`;
      const reference = storage().ref(`missing_forms/${fileName}`);
      await reference.putFile(image);
      imageUrl = await reference.getDownloadURL();

      await firestore()
        .collection('missing_forms')
        .add({
          user: {
            uid: user.uid,
            name: user.name,
            lastName: user.lastName,
            address: user.address,
            birthday: user.birthday,
            district: user.district,
            mail: user.mail,
            province: user.province,
          },
          age,
          address,
          contact1,
          date,
          details,
          gender,
          lastPlace,
          name,
          prize,
          imageUrl,
          createdAt: firestore.FieldValue.serverTimestamp(),
        });
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'İşlem Başarılı !',
        text2: 'Talebiniz kaydedildi.',
      });
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'İşlem Başarısız',
        text2: 'Talebiniz kaydedilemedi.Daha sonra tekrar deneyiniz.',
      });
    }
  },
);

export const createHelpForm = createAsyncThunk(
  'user/createHelpForm',
  async values => {
    const {
      additionalInfo,
      address,
      damageStatus,
      disasterDate,
      disasterType,
      statusDefinition,
      tel,
    } = values;

    try {
      const user = store.getState().user;

      await firestore()
        .collection('support_forms')
        .add({
          user: {
            uid: user.uid,
            name: user.name,
            lastName: user.lastName,
            address: user.address,
            birthday: user.birthday,
            district: user.district,
            mail: user.mail,
            province: user.province,
          },
          additionalInfo,
          address,
          damageStatus,
          disasterDate,
          disasterType,
          statusDefinition,
          tel,
        });
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'İşlem Başarılı !',
        text2: 'Talebiniz kaydedildi.',
      });
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'İşlem Başarısız',
        text2: 'Talebiniz kaydedilemedi.Daha sonra tekrar deneyiniz.',
      });
    }
  },
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (values, {getState, rejectWithValue}) => {
    console.log('form vals', values);
    try {
      const {uid} = getState().user;
      let imageUrl = null;

      if (values.image) {
        const imagePath = `user_images/${uid}/${Date.now()}.jpg`;
        const imageRef = storage().ref(imagePath);

        await imageRef.putFile(values.image);
        imageUrl = await imageRef.getDownloadURL();
      }

      const updatedValues = {...values};
      if (imageUrl) {
        updatedValues.image = imageUrl;
      }

      await firestore().collection('users').doc(uid).update(updatedValues);

      const updatedUserDoc = await firestore()
        .collection('users')
        .doc(uid)
        .get();

      if (updatedUserDoc.exists) {
        return {uid, ...updatedUserDoc.data()};
      } else {
        return rejectWithValue('User not found');
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message || 'An unexpected error occurred');
    }
  },
);

export const register = createAsyncThunk(
  'user/register',
  async ({mail, password, tcNo, name, lastName, birthday}) => {
    try {
      const isRealPerson = await axios.post(
        'https://api.kadircolak.com/TCKimlik/Home/Sorgula',
        {
          ad: name,
          soyad: lastName,
          dogumYili: parseInt(birthday.split('-')[0]),
          tcNo: parseFloat(tcNo),
        },
      );

      if (!JSON.parse(isRealPerson.data.toLowerCase())) {
        throw new Error('Lütfen bilgilerinizi kontrol ediniz !');
      }

      const newUser = await auth().createUserWithEmailAndPassword(
        mail,
        password,
      );
      const uid = newUser.user.uid;

      await firestore().collection('users').doc(uid).set({
        mail,
        tcNo,
        address: '',
        birthday,
        district: '',
        province: '',
        tel: '',
        name,
        lastName,
        role: 'user',
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

export const logout = createAsyncThunk('user/logout', async () => {
  await auth().signOut();
});

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
        state.lastName = payload.lastName;
        state.tcNo = payload.tcNo;
        state.tel = payload.tel;
        state.uid = payload.uid;
        // console.log('register payload: ', payload);
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
        state.lastName = payload.lastName;
        state.province = payload.province;
        state.tcNo = payload.tcNo;
        state.tel = payload.tel;
        state.uid = payload.uid;
        state.role = payload.role;
        state.image = payload.image;
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
        // console.log(payload);
        state.address = payload.address;
        state.birthday = payload.birthday;
        state.district = payload.district;
        state.mail = payload.mail;
        state.name = payload.name;
        state.province = payload.province;
        state.tcNo = payload.tcNo;
        state.tel = payload.tel;
        state.uid = payload.uid;
        state.image = payload.image;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(createHelpForm.pending, state => {
        state.status = 'loading';
      })
      .addCase(createHelpForm.fulfilled, (state, {payload}) => {
        state.status = 'succeeded';
      })
      .addCase(createHelpForm.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(createMissingForm.pending, state => {
        state.status = 'loading';
      })
      .addCase(createMissingForm.fulfilled, (state, {payload}) => {
        state.status = 'succeeded';
      })
      .addCase(createMissingForm.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default userSlice.reducer;
