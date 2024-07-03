import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import styles from '../styles/Top_Profile';

const Top_Profile = (props) => {

    const { isOnline } = props;
    let username;
    let img = require('../img/user.png');
    if (isOnline) {
        username = props.username;
        // img = require('');
    } else {
        username = 'Lütfen Giriş Yapınız!';
    }
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
                    <Text style={styles.username}>{username}</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export default Top_Profile;
