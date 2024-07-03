import { View, Text } from 'react-native';
import React from 'react';
import styles from '../../styles/Guide';
import Home_Card from '../../Components/Home_Card';
const Guide = () => {
    return (
        <View style={styles.container}>
            <Home_Card card_name="Deprem" card_color="orange" card_img={require('../../img/deprem.png')} card_link="EarthquakeScreen" />
            <Home_Card card_name="Sel" card_color="#1C78AD" card_img={require('../../img/sel.png')} card_link="FloodScreen" />
            <Home_Card card_name="Yangın" card_color="red" card_img={require('../../img/yangin.png')} card_link="FireScreen" />
            <Home_Card card_name="Heyelan" card_color="#895913" card_img={require('../../img/heyelan.png')} card_link="LandslideScreen" />
            <Home_Card card_name="Çığ" card_color="#38B6FF" card_img={require('../../img/cig.png')} card_link="AvalancheScreen" />
        </View>
    );
};

export default Guide;
