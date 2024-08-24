import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, ColorValue } from 'react-native';
import auth from '@react-native-firebase/auth';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Button } from 'react-native-paper';
import Toast from 'react-native-toast-message'
const Logout_Button = (props) => {

    const logout = async () => {
        try {
            await auth().signOut();
            Toast.show({
                type: 'success',
                position: 'top',
                text1: 'İşlem Başarılı',
                text2: 'Hesabınızdan başarıyla çıkış yapıldı.',
            });
        } catch (error) {
            console.error('Logout Error:', error);
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Hata',
                text2: 'Çıkış işlemi sırasında bir hata oluştu.',
            });
        }
    };

    return (

        <>
            <DrawerContentScrollView>
                <View style={{ paddingHorizontal: 12 }}>


                    <Button
                        mode="contained"
                        style={{
                            backgroundColor: '#FF9999',
                        }}
                        onPress={logout}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Çıkış Yap</Text>
                    </Button>
                </View>
            </DrawerContentScrollView>

        </>

    );
};

export default Logout_Button;
