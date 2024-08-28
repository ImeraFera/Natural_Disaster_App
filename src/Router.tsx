import { View, Text, ColorValue, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import MainApp from './MainApp';
import { legacy_createStore as createStore } from 'redux';
import initialState from './Context/store';
import reducers from './Context/reducers';

const store = createStore(reducers, initialState);

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>

  );
};

export default App;
