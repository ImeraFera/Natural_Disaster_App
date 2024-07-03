
import { View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles/Regsiter_Card';
import { Button, Text, Card, Checkbox, TextInput } from 'react-native-paper';

const Register_Card = () => {

    const [tcNo, setTcNo] = useState('');
    const [sifre, setSifre] = useState('');
    const [tekrarSifre, setTekrarSifre] = useState('');
    const [mail, setMail] = useState('');

    const kayitOl = () => {
        console.log('Kayıt Ol butonuna tıklandı');
    };

    return (
        <Card style={{ width: '90%' }}>
            <Card.Content>
                <TextInput
                    style={styles.input}
                    mode="outlined"
                    label="TC No"
                    inputMode="decimal"
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
                    onPress={kayitOl} mode="contained" buttonColor="red">KAYIT OL</Button>
            </Card.Actions>
        </Card>

    );
};

export default Register_Card;
