import {View, Text, Image} from 'react-native';
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import store from './redux/store';
import {Provider} from 'react-native-paper';
import Router from './Router';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <Provider>
        <Router />
      </Provider>
    </ReduxProvider>
  );
};

export default App;
