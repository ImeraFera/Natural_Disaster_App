/* eslint-disable eqeqeq */

import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import History_Card from '../../Components/History_Card';
import styles from '../../styles/Histories';
import {useRoute} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';

const Earthquake = () => {
  const data = useSelector(({app}) => app.disasterHistories);

  let earthquakeList = data?.filter(
    (disaster: {type: string}) => disaster.type == 'Earthquake',
  );

  const color = '#FFA500';

  return (
    <ScrollView style={styles.container}>
      {earthquakeList.length != 0 ? (
        earthquakeList.map((history: {index: any}, index: number) => (
          <History_Card key={index} color={color} history={history} />
        ))
      ) : (
        <Text variant="titleLarge" style={{color: 'red', textAlign: 'center'}}>
          Listelenecek Öge Yok.
        </Text>
      )}
    </ScrollView>
  );
};

export default Earthquake;
