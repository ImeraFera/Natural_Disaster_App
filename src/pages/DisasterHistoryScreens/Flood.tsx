import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Flag from 'react-native-country-flag';
import History_Card from '../../Components/History_Card';
import styles from '../../styles/Histories';
import data from '../../tempData/data';


const Flood = () => {

    const color = '#1C78AD';
    return (
        <ScrollView style={styles.container}>
            {data.map((history) => (
                history.type === 'Flood' ? (
                    <History_Card key={history.id} color={color} history={history} />
                ) : null))}
        </ScrollView>
    );
};

export default Flood;
