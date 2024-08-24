
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


const Login_Card = () => {
    const navigation = useNavigation();

    const [mail, setMail] = React.useState('');
    const [sifre, setSifre] = React.useState('');
    const [beniUnutma, setBeniUnutma] = React.useState(false);
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

    const login = async () => {

        if (!sifre || !mail) {
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Hata',
                text2: 'Tüm Alanları Doldurunuz!',
            });
            return;
        }


        try {

            await auth().signInWithEmailAndPassword(mail, sifre);
            console.log('giris basarili');

            setMail('');
            setSifre('');
            await showToast('success', 'İşlem Başarılı', 'Giriş Yapıldı.')
            return navigation.navigate('Home_Screen');

        } catch (error) {
            console.log(error);

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
                <Card.Content>
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
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Checkbox
                            status={beniUnutma ? 'checked' : 'unchecked'}
                            onPress={() => setBeniUnutma(!beniUnutma)}
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
                        onPress={login} mode="contained" buttonColor="red">GİRİŞ YAP</Button>
                </Card.Actions>
            </Card>

        </>

    );
};
export default Login_Card;
