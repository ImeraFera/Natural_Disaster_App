
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import CountryFlag from 'react-native-country-flag';
import { Avatar, Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const History_Card = (prop) => {
    const { color, history, type } = prop;
    const navigation = useNavigation();

    const goTo = () => {
        navigation.navigate('HistoryDetailsScreen', { history, color });
    };

    const styles = StyleSheet.create({

        card: {
            marginBottom: 10,
            backgroundColor: color,
        },

    });

    return (

        <Card style={styles.card}>
            <Card.Title titleNumberOfLines={3} titleStyle={{ textAlign: 'right', color: 'white' }} titleVariant='titleMedium' title={history.name}
                left={(props) => <CountryFlag {...props} isoCode={history.region} size={48} />}
            />
            <Card.Actions>
                <Button
                    onPress={goTo} mode="contained"
                >Detayları Oku</Button>
            </Card.Actions>
        </Card>

    );
};

export default History_Card;
