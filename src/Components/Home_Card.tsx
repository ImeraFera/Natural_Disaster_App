import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Button, Card } from 'react-native-paper';
import styles from '../styles/Home_Card'


const Home_Card = (props) => {
    const { card_name, card_img, card_color, card_link } = props;
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate(card_link);
    };


    return (
        <TouchableOpacity style={styles.card} onPress={handlePress} >
            <Card style={{ backgroundColor: card_color, borderTopEndRadius: 50, borderBottomStartRadius: 50 }}>
                <Card.Content style={{ alignItems: 'center' }}>
                    <Card.Cover style={{ width: 75, height: 75, backgroundColor: card_color }} source={card_img} />
                </Card.Content>
                <Card.Title title={card_name} titleNumberOfLines={2} titleStyle={{ color: 'white', textAlign: 'center' }} />
            </Card>
        </TouchableOpacity>
    );
};

export default Home_Card;
