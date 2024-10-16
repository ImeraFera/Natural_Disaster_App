import {View, Text, ColorValue, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Provider, useSelector} from 'react-redux';
import MainApp from './MainApp';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
