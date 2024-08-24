import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import styles from '../styles/Top_Profile';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Logout_Button from './Logout_Button';


const Custom_Drawer_Content = (props) => {
    const [userData, setUserData] = useState(null);
    const user = auth().currentUser;
    let img = (!user ? require('../img/user.png') : user.photoURL);

    useEffect(() => {
        const fetchUser = async () => {
            if (user) {
                try {
                    const userDoc = await firestore().collection('users').doc(user.uid).get();
                    if (userDoc.exists) {
                        const data = userDoc.data();
                        console.log('Kullanıcı Verileri:', data);
                        setUserData(data);
                    } else {
                        console.log('Belge bulunamadı.');
                    }
                } catch (error) {
                    console.error('Veri alma hatası:', error);
                }
            }
        };

        fetchUser();
    }, [user]);

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
                    <Text style={styles.username}>{user ? userData?.name : "Lütfen Giriş Yapınız!"}</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
            {user ? <Logout_Button /> : null}
        </DrawerContentScrollView>

    );
};

export default Custom_Drawer_Content;
