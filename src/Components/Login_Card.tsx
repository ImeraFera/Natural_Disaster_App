import { TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles/Login_Card';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Button, Card, TextInput, Checkbox, Text } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import Toast from 'react-native-toast-message';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';


const Login_Card = () => {
    const navigation = useNavigation();
    // const [beniUnutma, setBeniUnutma] = useState(false);


    const dispatch = useDispatch();
    const handleLogin = async (values) => {

        const { mail, password } = values;
        try {
            const user = await auth().signInWithEmailAndPassword(mail, password);
            const userDoc = await firestore().collection('users').doc(user.user.uid).get();
            if (userDoc.exists) {
                const userData = userDoc.data();
                dispatch({
                    type: 'LOGIN', payload: {

                        name: userData?.name,
                        mail,
                        uid: user.user.uid,
                        isAuth: true,
                        birthday: userData?.birthday,
                        address: userData?.address,
                        tel: userData?.tel,
                        district: userData?.district,
                        province: userData?.province,
                        tcNo: userData?.tcNo,
                        photoUrl: userData?.photoUrl,

                    },

                });

                values.mail = '';
                values.password = '';

                Toast.show({
                    type: 'success',
                    position: 'top',
                    text1: 'Giriş Başarılı',
                    text2: 'Başarıyla giriş yaptınız.',
                });
                return navigation.navigate('Home_Screen');
            }


        } catch (error) {
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Giriş Başarısız',
                text2: 'Mail veya şifreniz yanlış',
            });
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
            <Card style={{ width: '90%' }}>

                <Formik
                    onSubmit={handleLogin}
                    initialValues={{ mail: '', password: '' }}
                >
                    {
                        ({ handleChange, handleSubmit, values }) => (
                            <>
                                <Card.Content>
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
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Checkbox
                                            status={'unchecked'}
                                            color="red" />
                                        <Text variant="labelLarge" style={{ textAlign: 'left' }}>Beni Hatırla</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text variant="labelSmall">Hesabın Yok Mu?</Text>
                                        <Button onPress={goToRegister} labelStyle={{}} mode="text" textColor="red">Kayıt Ol!</Button>
                                    </View>
                                </Card.Content>
                                <Card.Actions style={{ alignSelf: 'center' }}>
                                    <Button
                                        onPress={handleSubmit} mode="contained" buttonColor="red">GİRİŞ YAP</Button>
                                </Card.Actions>
                            </>

                        )
                    }
                </Formik>




            </Card>

        </>

    );
};
export default Login_Card;
