import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import History_Card from '../../Components/History_Card';
import styles from '../../styles/Histories';
import {useRoute} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';

const Fire = () => {
  const color = '#FF0000';

  const data = useSelector(({app}) => app.disasterHistories);

  let fireList = data?.filter(
    (disaster: {type: string}) => disaster.type == 'Fire',
  );

  return (
    <ScrollView style={styles.container}>
      {fireList.length != 0 ? (
        fireList.map((history: {index: any}, index: number) => (
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

export default Fire;
