
import { View, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles/Regsiter_Card';
import { Button, Text, Card, Checkbox, TextInput } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import firestore from '@react-native-firebase/firestore';

import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Register_Card = () => {

    const [tcNo, setTcNo] = useState('');
    const [sifre, setSifre] = useState('');
    const [tekrarSifre, setTekrarSifre] = useState('');
    const [mail, setMail] = useState('');
    const navigation = useNavigation();

    const showToast = (type, text1, text2) => {
        return new Promise((resolve) => {
            Toast.show({
                type,
                position: 'top',
                text1,
                text2,
                onHide: resolve,
            });
        });
    };


    const register = async () => {

        if (!sifre || !tekrarSifre || !tcNo || !mail) {
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Hata',
                text2: 'Tüm Alanları Doldurunuz!',
            });
            setSifre('');
            setTekrarSifre('');
            return;
        }

        if (tcNo.length != 11) {

            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Hata',
                text2: 'TC No 11 Haneli Olmalı!',
            });
            setSifre('');
            setTekrarSifre('');
            return;
        }
        if (sifre !== tekrarSifre) {
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Hata',
                text2: 'Şifreler Eşleşmiyor!',
            });
            setSifre('');
            setTekrarSifre('');
            return;
        }

        try {

            const { user } = await auth().createUserWithEmailAndPassword(mail, sifre);

            const uid = user.uid;

            await firestore().collection('users').doc(uid).set({
                name: mail.split('@')[0],
                tcNo,
                createdAt: firestore.FieldValue.serverTimestamp(),
            });

            setMail('');
            setSifre('');
            setTcNo('');
            setTekrarSifre('');

            await showToast('success', 'İşlem Başarılı', 'Kayıt işlemi tamamlandı.');

            navigation.navigate('Home_Screen');

        } catch (error) {
            console.log(error);
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Hata',
                text2: 'Kayıt işlemi sırasında bir hata oluştu.',
            });
        }



    };
    return (
        <>

            <Card style={{ width: '90%' }}>

                <Card.Content>
                    <TextInput
                        style={styles.input}
                        mode="outlined"
                        label="TC No"
                        inputMode="numeric"
                        maxLength={11}

                        activeOutlineColor="red"
                        value={tcNo}
                        onChangeText={text => setTcNo(text)}
                    />
                    <TextInput
                        style={styles.input}

                        mode="outlined"
                        label="Email"
                        activeOutlineColor="red"
                        value={mail}
                        onChangeText={text => setMail(text)}
                    />
                    <TextInput
                        style={styles.input}

                        mode="outlined"
                        label="Şifre"
                        secureTextEntry={true}
                        activeOutlineColor="red"
                        value={sifre}
                        onChangeText={text => setSifre(text)}
                    />
                    <TextInput
                        style={styles.input}

                        mode="outlined"
                        label="Şifre Tekrar"
                        secureTextEntry={true}
                        activeOutlineColor="red"
                        value={tekrarSifre}
                        onChangeText={text => setTekrarSifre(text)}
                    />
                </Card.Content>
                <Card.Actions style={{ alignSelf: 'center' }}>
                    <Button
                        onPress={register} mode="contained" buttonColor="red">KAYIT OL
                    </Button>

                </Card.Actions>
            </Card>

        </>

    );
};

export default Register_Card;
