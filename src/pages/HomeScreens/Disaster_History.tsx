import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Disaster_History';
import Disaster_Card from '../../Components/Disaster_Card';
import { ActivityIndicator } from 'react-native-paper';
import data from '../../tempData/data';
const card_fields = [
    {
        card_name: 'Deprem',
        card_img: require('../../img/deprem.png'),
        card_link: 'EarthquakeHistoryScreen',
        card_color: '#FFA500',
    },
    {
        card_name: 'Sel',
        card_img: require('../../img/sel.png'),
        card_link: 'FloodHistoryScreen',
        card_color: '#1C78AD',
    },
    {
        card_name: 'Çığ',
        card_img: require('../../img/cig.png'),
        card_link: 'AvalancheHistoryScreen',
        card_color: '#38B6FF',
    },
    {
        card_name: 'Heyelan',
        card_img: require('../../img/heyelan.png'),
        card_link: 'LandslideHistoryScreen',
        card_color: '#895914',
    },
    {
        card_name: 'Yangın',
        card_img: require('../../img/yangin.png'),
        card_link: 'FireHistoryScreen',
        card_color: 'red',
    },
    {
        card_name: 'Diğer',
        card_img: require('../../img/diger.png'),
        card_link: 'OtherHistoryScreen',
        card_color: '#3E4466',
    }
];
const Disaster_History = () => {

    return (
        <View style={styles.container}>
            {card_fields.map((item, index) => (
                <Disaster_Card
                    key={index}
                    card_name={item.card_name}
                    card_img={item.card_img}
                    card_color={item.card_color}
                    card_link={item.card_link}
                    data={data}
                />
            ))}
        </View>
    );
};

export default Disaster_History;
