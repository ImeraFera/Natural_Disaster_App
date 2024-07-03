import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Flag from 'react-native-country-flag';
import History_Card from '../../Components/History_Card';
import styles from '../../styles/Histories';
import data from '../../tempData/data';



const Landslide = () => {

    const color = '#895914';
    return (
        <ScrollView style={styles.container}>
            {data.map((history) => (
                <History_Card key={history.history_id} color={color} history={history} />
            ))}
        </ScrollView>
    );
};

export default Landslide;
