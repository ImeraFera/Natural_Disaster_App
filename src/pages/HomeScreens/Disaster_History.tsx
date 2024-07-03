import { View, Text } from 'react-native';
import React from 'react';
import Home_Card from '../../Components/Home_Card';
import styles from '../../styles/Disaster_History';
const Disaster_History = () => {

    return (
        <View style={styles.container}>
            <Home_Card card_name="Deprem" card_img={require('../../img/deprem.png')} card_color="#FFA500" card_link="EarthquakeHistoryScreen" />

            <Home_Card card_name="Sel" card_img={require('../../img/sel.png')} card_color="#1C78AD" card_link="FloodHistoryScreen" />

            <Home_Card card_name="Çığ" card_img={require('../../img/cig.png')} card_color="#38B6FF" card_link="AvalancheHistoryScreen" />

            <Home_Card card_name="Heyelan" card_img={require('../../img/heyelan.png')} card_color="#895914" card_link="LandslideHistoryScreen" />

            <Home_Card card_name="Yangın" card_img={require('../../img/yangin.png')} card_color="red" card_link="FireHistoryScreen" />
        </View>
    );
};

export default Disaster_History;
