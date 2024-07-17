import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import History_Card from '../../Components/History_Card';
import styles from '../../styles/Histories';
import data from '../../tempData/data';

const Other = () => {

    const color = '#3E4466';
    return (
        <ScrollView style={styles.container}>
            {data.map((history) =>
                history.type === 'Other' ? (
                    <History_Card key={history.id} color={color} history={history} />
                ) : null
            )}
        </ScrollView>
    );
};

export default Other;
