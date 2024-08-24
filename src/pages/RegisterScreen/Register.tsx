import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'react-native-elements';
import Register_Card from '../../Components/Register_Card';
import styles from '../../styles/Register';
import { Card } from 'react-native-paper';

const Register = () => {



    return (
        <View style={styles.container}>
            <Card mode="contained" style={{ width: '50%', padding: 10, backgroundColor: '#D9D9D9' }}>
                <Card.Cover style={{ width: 100, height: 100, alignSelf: 'center', backgroundColor: '#D9D9D9' }} source={require('../../img/logo.png')} />
                <Card.Title title="Kayıt Ol" titleStyle={{
                    textAlign: 'center', fontSize: 25, color: 'red',
                    fontWeight: 'bold',
                }} />
            </Card>
            <Register_Card />
        </View>


    );
};

export default Register;
