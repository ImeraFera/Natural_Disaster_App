import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';


const Disaster_Card = (props) => {
    const { card_link, card_color, card_img, card_name, card_content } = props;
    const navigation = useNavigation();

    const goTo = () => {
        navigation.navigate(card_link, {
            content: card_content,
            title: card_name,
        });
    };

    return (
        <TouchableOpacity onPress={goTo} >
            <Card style={{ margin: '2%', backgroundColor: card_color, borderTopEndRadius: 50, borderBottomStartRadius: 50 }}>
                <Card.Content style={{ alignItems: 'center' }}>
                    <Card.Cover style={{ width: 75, height: 75, backgroundColor: card_color }} source={card_img} />
                </Card.Content>
                <Card.Title title={card_name} titleNumberOfLines={2} titleStyle={{ color: 'white', textAlign: 'center' }} />
            </Card>
        </TouchableOpacity>
    );
};

export default Disaster_Card;
