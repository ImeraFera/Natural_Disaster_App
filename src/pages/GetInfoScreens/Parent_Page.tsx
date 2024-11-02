import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../styles/ParentPage';
import Home_Card from '../../Components/Home_Card';

const Parent_Page = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Home_Card
          isActive={true}
          card_name="Hasar Sorgu"
          card_img={require('../../img/sorgu.png')}
          card_color="#8F3892"
          card_link="QueryBuild_Screen"
        />
      </View>

      <View style={styles.bottom_container}>
        <Home_Card
          isActive={true}
          card_name="Hasar Bildir"
          card_img={require('../../img/sorgu.png')}
          card_color="gray"
          card_link="HavocReport_Screen"
        />
      </View>
    </View>
  );
};

export default Parent_Page;
