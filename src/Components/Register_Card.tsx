
import { View, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles/Regsiter_Card';
import { Button, Text, Card, Checkbox, TextInput } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

const Register_Card = () => {

    const [repeatPassword, setrepeatPassword] = useState('');
    const navigation = useNavigation();


    const handleRegister = async (values) => {
        const { mail, tcNo, password } = values;

        if (password !== repeatPassword) {
            return Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Kayıt Hatası',
                text2: 'Şifreler uyuşmuyor!',
            });
        }

        try {
            const newUser = await auth().createUserWithEmailAndPassword(mail, password);
            const uid = newUser.user.uid;

            await auth().signInWithEmailAndPassword(mail, password);

            await firestore().collection('users').doc(uid).set({
                mail,
                tcNo,
                address: '',
                birthday: '',
                district: '',
                province: '',
                tel: '',
                name: mail.split('@')[0],
            });

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
                text2: 'Kayıt sırasında bir hata oluştu.',
            });
        }
    };


    return (
        <>
            <Card style={{ width: '90%' }}>
                <Formik
                    initialValues={{ mail: '', tcNo: '', password: '' }}
                    onSubmit={handleRegister}
                >
                    {
                        ({ handleChange, handleSubmit, values }) => (
                            <>
                                <Card.Content>
                                    <TextInput
                                        style={styles.input}
                                        mode="outlined"
                                        label="TC No"
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
                                <Card.Actions style={{ alignSelf: 'center' }}>
                                    <Button
                                        onPress={handleSubmit} mode="contained" buttonColor="red">KAYIT OL
                                    </Button>

                                </Card.Actions>
                            </>
                        )
                    }
                </Formik>

            </Card>

        </>

    );
};

export default Register_Card;
