import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from '../../styles/Declaration_Details';
import Declaration_Details_Card from '../../Components/Declaration_Details_Card';
import {PaperProvider} from 'react-native-paper';

const Declaration_Details = () => {
  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <Declaration_Details_Card />
      </ScrollView>
    </PaperProvider>
  );
};
export default Declaration_Details;
