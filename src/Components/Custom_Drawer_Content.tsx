import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import styles from '../styles/Top_Profile';
import Logout_Button from './Logout_Button';
import { useSelector } from 'react-redux';

const Custom_Drawer_Content = (props) => {
    let img = require('../img/user.png')
    const user = useSelector(s => s.userData);

    return (
        <DrawerContentScrollView>
            <View style={styles.container}>
                <View style={styles.img_container}>
                    <Image
                        source={img}
                        style={styles.img}
                    />
                </View>
                <View style={styles.username_container}>
                    <Text style={styles.username}>{user.isAuth ? user.name : "Lütfen Giriş Yapınız!"}</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
            {user.isAuth ? (
                <Logout_Button />
            ) : null}
        </DrawerContentScrollView>

    );
};

export default Custom_Drawer_Content;
