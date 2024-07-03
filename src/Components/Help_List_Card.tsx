
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../styles/Help_List_Card';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, Card, IconButton } from 'react-native-paper';
const Help_List_Card = ({ props }) => {

    const navigation = useNavigation();

    const goToHelpDetails = () => {
        navigation.navigate('HelpDetailsScreen');
    };


    const item = props;
    return (
        <Card style={styles.container}>
            <Card.Title
                subtitleStyle={styles.card_subtitle}
                titleStyle={styles.card_title}
                style={styles.card}
                titleNumberOfLines={2}
                title={'Ad-Soyad: ' + item.name}
                subtitle={'Tarih: ' + item.date} />
            <Card.Title titleNumberOfLines={1} subtitleStyle={{ fontSize: 20 }} titleStyle={{ fontSize: 20 }} title={'Yardım Türü: ' + item.helpType} subtitle={'Konum: ' + item.location} />
            <Card.Actions>
                <Button onPress={goToHelpDetails} labelStyle={styles.button_label} style={styles.button} mode="contained">Detayları Göster</Button>
            </Card.Actions>
        </Card>
    );
};

export default Help_List_Card;
