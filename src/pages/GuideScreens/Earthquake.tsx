import { View, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Card, Divider, Text } from 'react-native-paper';
const Earthquake = () => {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    const route = useRoute();
    const { content, title } = route.params || {};

    return (
        <ScrollView style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#D9D9D9',
        }}>
            <Card style={{ width: '95%', alignSelf: 'center', margin: '5%', backgroundColor: '#FFA500' }}>
                <Card.Title titleVariant="titleLarge" titleStyle={{ textAlign: 'center', color: 'white' }} title={title} />
                <Divider style={{ height: 1, marginVertical: '1%' }} />
                <Card.Content>
                    <Text style={{ color: 'white', }} variant="bodyLarge">
                        {content}
                    </Text>
                </Card.Content>
                <Card.Actions>
                    <Button mode='contained' onPress={goBack}>Geri Git</Button>
                </Card.Actions>
            </Card>
        </ScrollView>
    );
};


export default Earthquake;
