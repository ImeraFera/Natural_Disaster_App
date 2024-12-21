import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';

const Loading_Screen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('calisti');
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'lightgray',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <Image
        source={require('../img/logo.png')}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <ActivityIndicator
        style={{
          marginTop: 20,
        }}
        color="red"
        size={50}
      />
    </View>
  );
};

export default Loading_Screen;
