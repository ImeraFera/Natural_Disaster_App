
import { TouchableOpacity, View, } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles/Login_Card';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Button, Card, TextInput, Checkbox, Text } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
const Login_Card = () => {
    const navigation = useNavigation();

    const [mail, setMail] = React.useState('');
    const [sifre, setSifre] = React.useState('');
    const [beniUnutma, setBeniUnutma] = React.useState(false);

    const girisYap = () => {
        console.log('Giriş Yap butonuna tıklandı');
    };

    const sifremiUnuttum = () => {
        console.log('Şifremi Unuttum butonuna tıklandı');

    };
    const kayitOl = () => {
        console.log('Kayıt Ol butonuna tıklandı');

    };
    const goToRegister = () => {
        navigation.navigate('Register_Screen');  // Kayıt ekranına yönlendiriliyor

    }

    return (
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
                    <Text variant='labelSmall'>Hesabın Yok Mu?</Text>
                    <Button onPress={goToRegister} labelStyle={{}} mode='text' textColor='red'>Kayıt Ol!</Button>
                </View>
            </Card.Content>
            <Card.Actions style={{ alignSelf: 'center' }}>
                <Button
                    onPress={kayitOl} mode="contained" buttonColor="red">GİRİŞ YAP</Button>
            </Card.Actions>
        </Card>

    );
};
export default Login_Card;
