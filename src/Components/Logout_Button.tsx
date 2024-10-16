import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ColorValue,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Button} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/slices/userSlice';

const Logout_Button = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const signOut = async () => {
    try {
      await dispatch(logout()).unwrap();

      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'İşlem Başarılı',
        text2: 'Hesabınızdan başarıyla çıkış yapıldı.',
      });

      return navigation.navigate('Home_Screen');
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
        <View style={{paddingHorizontal: 12}}>
          <Button
            mode="contained"
            style={{
              backgroundColor: '#FF9999',
            }}
            onPress={signOut}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
              Çıkış Yap
            </Text>
          </Button>
        </View>
      </DrawerContentScrollView>
    </>
  );
};

export default Logout_Button;
