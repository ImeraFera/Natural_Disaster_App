
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import CountryFlag from 'react-native-country-flag';
import { Avatar, Button, Card } from 'react-native-paper';

// const darkerColor = (color: string) => {
//     const hex = color.replace(/^#/, '');
//     const rgb = parseInt(hex, 16);
//     const darkerRGB = rgb * 0.2;
//     const darkerHex = `#${Math.round(darkerRGB).toString(16).padStart(6, '0')}`;

//     return darkerHex;
// };

const History_Card = (prop) => {
    const { color, history } = prop;
    // const darkerBorderColor = darkerColor(color);

    const styles = StyleSheet.create({

        card: {
            marginBottom: 10,
            backgroundColor: color,
        },
        title: {
            color: 'white',
            fontSize: 20,
            fontWeight: '500',
            textAlign: 'center',
        },
    });

    return (
        <Card style={styles.card}>
            <Card.Title titleStyle={styles.title} title={history.history_name}
                left={(props) => <CountryFlag {...props} isoCode={history.history_region} size={48} />}
            />
            <Card.Actions>
                <Button onPress={() => console.log('a')
                } mode="contained">Detayları Oku</Button>
            </Card.Actions>
        </Card>
    );
};

export default History_Card;
