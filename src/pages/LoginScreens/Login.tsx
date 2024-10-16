import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../../styles/Login';
import Login_Card from '../../Components/Login_Card';
import {Card} from 'react-native-paper';

const Login = () => {
  return (
    <View style={styles.container}>
      <Card
        mode="contained"
        style={{width: '50%', padding: 10, backgroundColor: '#D9D9D9'}}>
        <Card.Cover
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
            backgroundColor: '#D9D9D9',
          }}
          source={require('../../img/logo.png')}
        />
        <Card.Title
          title="Giriş Yap"
          titleStyle={{
            textAlign: 'center',
            fontSize: 25,
            color: 'red',
            fontWeight: 'bold',
          }}
        />
      </Card>
      <Login_Card />
    </View>
  );
};

export default Login;
