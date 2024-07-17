
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Flag from 'react-native-country-flag';
import History_Card from '../../Components/History_Card';
import styles from '../../styles/Histories';
import data from '../../tempData/data';
import { Text } from 'react-native-paper';

const Avalanche = () => {
    const color = '#38B6FF';

    return (
        <ScrollView style={styles.container}>
            {data.map((history) => (
                history.type === 'Avalanche' ? (
                    <History_Card key={history.id} color={color} history={history} />
                ) : null

            ))}

        </ScrollView>
    );
};

export default Avalanche;
