import {View, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Regsiter_Card';
import {Button, Text, Card, Checkbox, TextInput} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../redux/slices/userSlice';
import {validationSchema} from '../validationSchemas/RegisterSchema';
import DatePicker from 'react-native-date-picker';

const Register_Card = () => {
  const formInitialValues = {
    name: '',
    lastName: '',
    birthday: '',
    mail: '',
    tcNo: '',
    password: '',
  };
  const [repeatPassword, setrepeatPassword] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleRegister = async values => {
    const {password} = values;
    setisLoading(true);
    if (password !== repeatPassword) {
      return Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Kayıt Hatası',
        text2: 'Şifreler uyuşmuyor!',
      });
    }
    try {
      await dispatch(register(values)).unwrap();

      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Kayıt Başarılı',
        text2: 'Başarıyla kayıt oldunuz.',
      });

      navigation.navigate('Home_Screen');
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Kayıt Hatası',
        text2: error.message,
      });
    } finally {
      setisLoading(false);
    }
  };

  return (
    <Card style={{width: '100%', display: 'flex'}}>
      <Formik
        initialValues={formInitialValues}
        validationSchema={validationSchema}
        onSubmit={handleRegister}>
        {({handleChange, handleSubmit, values}) => (
          <>
            <Card.Content>
              <TextInput
                style={styles.input}
                mode="outlined"
                label="Ad"
                id="name"
                inputMode="text"
                activeOutlineColor="red"
                value={values.name}
                onChangeText={handleChange('name')}
              />
              <TextInput
                style={styles.input}
                mode="outlined"
                label="Soyad"
                id="lastName"
                inputMode="text"
                activeOutlineColor="red"
                value={values.lastName}
                onChangeText={handleChange('lastName')}
              />
              <TextInput
                label="Doğum Tarihi"
                value={values.birthday}
                textColor="black"
                activeOutlineColor="red"
                mode="outlined"
                style={styles.input}
                editable={true}
                onPressIn={() => setOpen(true)}
              />
              <DatePicker
                modal
                open={open}
                date={new Date(values.birthday || new Date())}
                mode="date"
                onConfirm={date => {
                  setOpen(false);
                  const formattedDate = date.toISOString().split('T')[0];
                  handleChange('birthday')(formattedDate);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
              <TextInput
                style={styles.input}
                mode="outlined"
                label="TC No"
                id="tcNo"
                inputMode="numeric"
                maxLength={11}
                activeOutlineColor="red"
                value={values.tcNo}
                onChangeText={handleChange('tcNo')}
              />
              <TextInput
                style={styles.input}
                mode="outlined"
                label="Email"
                activeOutlineColor="red"
                value={values.mail}
                onChangeText={handleChange('mail')}
              />
              <TextInput
                style={styles.input}
                mode="outlined"
                label="Şifre"
                secureTextEntry={true}
                activeOutlineColor="red"
                value={values.password}
                onChangeText={handleChange('password')}
              />
              <TextInput
                style={styles.input}
                mode="outlined"
                label="Şifre Tekrar"
                secureTextEntry={true}
                activeOutlineColor="red"
                value={repeatPassword}
                onChangeText={text => setrepeatPassword(text)}
              />
            </Card.Content>
            <Card.Actions style={{alignSelf: 'center'}}>
              <Button
                onPress={handleSubmit}
                mode="contained"
                loading={isLoading}
                disabled={isLoading}
                buttonColor="red">
                KAYIT OL
              </Button>
            </Card.Actions>
          </>
        )}
      </Formik>
    </Card>
  );
};

export default Register_Card;
