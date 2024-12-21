import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../styles/Guide';
import Guide_Card from '../../Components/Guide_Card';
const card_fields = [
  {
    card_name: 'Deprem',
    card_img: require('../../img/deprem.png'),
    card_link: 'EarthquakeScreen',
    card_color: '#FFA500',
  },
  {
    card_name: 'Sel',
    card_img: require('../../img/sel.png'),
    card_link: 'FloodScreen',
    card_color: '#1C78AD',
  },
  {
    card_name: 'Çığ',
    card_img: require('../../img/cig.png'),
    card_link: 'AvalancheScreen',
    card_color: '#38B6FF',
  },
  {
    card_name: 'Heyelan',
    card_img: require('../../img/heyelan.png'),
    card_link: 'LandslideScreen',
    card_color: '#895914',
  },
  {
    card_name: 'Yangın',
    card_img: require('../../img/yangin.png'),
    card_link: 'FireScreen',
    card_color: 'red',
  },
];

const Guide = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      {card_fields.map((item, index) => (
        <Guide_Card
          key={index}
          card_name={item.card_name}
          card_color={item.card_color}
          card_img={item.card_img}
          card_link={item.card_link}
        />
      ))}
    </View>
  );
};

export default Guide;
