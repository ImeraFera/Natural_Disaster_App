import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import History_Card from '../../Components/History_Card';
import styles from '../../styles/Histories';
import data from '../../tempData/data';
import {useRoute} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';

const Other = () => {
  const color = '#3E4466';
  const data = useSelector(({app}) => app.disasterHistories);

  let otherList = data?.filter(
    (disaster: {type: string}) => disaster.type == 'Other',
  );
  return (
    <ScrollView style={styles.container}>
      {otherList.length != 0 ? (
        otherList.map((history: {index: any}, index: number) => (
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

export default Other;
