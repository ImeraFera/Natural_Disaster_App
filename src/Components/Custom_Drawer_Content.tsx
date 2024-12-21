import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import styles from '../styles/Top_Profile';
import Logout_Button from './Logout_Button';
import {useSelector} from 'react-redux';

const Custom_Drawer_Content = props => {
  let img = require('../img/user.png');
  const isAuth = useSelector(({user}) => user.isAuth);
  const name = useSelector(({user}) => user.name);
  const lastName = useSelector(({user}) => user.lastName);

  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <View style={styles.img_container}>
          <Image source={img} style={styles.img} />
        </View>
        <View style={styles.username_container}>
          <Text style={styles.username}>
            {isAuth ? name + ' ' + lastName : 'Lütfen Giriş Yapınız!'}
          </Text>
        </View>
      </View>
      <DrawerItemList {...props} />
      {isAuth ? <Logout_Button /> : null}
    </DrawerContentScrollView>
  );
};

export default Custom_Drawer_Content;
