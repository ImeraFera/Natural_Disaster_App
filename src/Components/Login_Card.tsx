import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Login_Card';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {
  Button,
  Card,
  TextInput,
  Checkbox,
  Text,
  HelperText,
} from 'react-native-paper';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';
import Toast from 'react-native-toast-message';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {validationSchema} from '../validationSchemas/LoginSchema';
import {login} from '../redux/slices/userSlice';

const Login_Card = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isLoading, setisLoading] = useState(false);

  const handleLogin = async values => {
    setisLoading(true);
    try {
      await dispatch(login(values)).unwrap();

      values.mail = '';
      values.password = '';

      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Giriş Başarılı',
        text2: 'Başarıyla giriş yaptınız.',
      });

      return navigation.navigate('Home_Screen');
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Giriş Başarısız',
        text2: 'Mail veya şifreniz yanlış',
      });
    } finally {
      setisLoading(false);
    }
  };

  const sifremiUnuttum = () => {
    console.log('Şifremi Unuttum butonuna tıklandı');
  };

  const goToRegister = () => {
    navigation.navigate('Register_Screen');
  };

  return (
    <>
      <Card style={{width: '90%'}}>
        <Formik
          onSubmit={handleLogin}
          initialValues={{mail: '', password: ''}}
          validationSchema={validationSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <Card.Content>
                <TextInput
                  style={styles.input}
                  mode="outlined"
                  label="Email"
                  activeOutlineColor="red"
                  value={values.mail}
                  onChangeText={handleChange('mail')}
                  onBlur={handleBlur('mail')}
                  error={touched.mail && errors.mail ? true : false}
                />
                <HelperText
                  type="error"
                  style={{
                    display: touched.mail && errors.mail ? 'flex' : 'none',
                  }}
                  visible={touched.mail && errors.mail ? true : false}>
                  {errors.mail}
                </HelperText>
                <TextInput
                  style={styles.input}
                  mode="outlined"
                  label="Şifre"
                  secureTextEntry={true}
                  activeOutlineColor="red"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  error={touched.password && errors.password ? true : false}
                />
                <HelperText
                  type="error"
                  style={{
                    display: touched.mail && errors.mail ? 'flex' : 'none',
                  }}
                  visible={touched.mail && errors.mail ? true : false}>
                  {errors.password}
                </HelperText>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Checkbox status={'unchecked'} color="red" />
                  <Text variant="labelLarge" style={{textAlign: 'left'}}>
                    Beni Hatırla
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text variant="labelSmall">Hesabın Yok Mu?</Text>
                  <Button
                    onPress={goToRegister}
                    labelStyle={{}}
                    mode="text"
                    textColor="red">
                    Kayıt Ol!
                  </Button>
                </View>
              </Card.Content>
              <Card.Actions style={{alignSelf: 'center'}}>
                <Button
                  onPress={handleSubmit}
                  mode="contained"
                  loading={isLoading}
                  disabled={isLoading}
                  buttonColor="red">
                  GİRİŞ YAP
                </Button>
              </Card.Actions>
            </>
          )}
        </Formik>
      </Card>
    </>
  );
};
export default Login_Card;
