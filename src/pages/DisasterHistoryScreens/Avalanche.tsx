/* eslint-disable eqeqeq */

import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import History_Card from '../../Components/History_Card';
import styles from '../../styles/Histories';
import {Text} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Avalanche = () => {
  const data = useSelector(({app}) => app.disasterHistories);

  let avalancheList = data?.filter(
    (disaster: {type: string}) => disaster.type == 'Avalanche',
  );

  const color = '#38B6FF';

  return (
    <ScrollView style={styles.container}>
      {avalancheList.length != 0 ? (
        avalancheList.map((history: {index: any}, index: number) => (
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

export default Avalanche;
