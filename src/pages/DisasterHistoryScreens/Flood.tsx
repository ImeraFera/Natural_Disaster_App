import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Flag from 'react-native-country-flag';
import History_Card from '../../Components/History_Card';
import styles from '../../styles/Histories';
import data from '../../tempData/data';
import {useRoute} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';

const Flood = () => {
  const color = '#1C78AD';

  const data = useSelector(({app}) => app.disasterHistories);

  let floodList = data?.filter(
    (disaster: {type: string}) => disaster.type == 'Flood',
  );
  return (
    <ScrollView style={styles.container}>
      {floodList.length != 0 ? (
        floodList.map((history: {index: any}, index: number) => (
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

export default Flood;
