import { View, ScrollView } from 'react-native';
import React from 'react';
import { Button, Card, Divider, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const History_Details = ({ route }) => {
    const { history, color } = route.params;
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    }
    return (
        <ScrollView style={{ backgroundColor: '#D9D9D9' }}>
            <Card mode="outlined" style={{
                backgroundColor: color,
                width: '95%',
                alignSelf: 'center',
                marginVertical: '3%',
                borderColor: color,
            }}>
                <Card.Title
                    titleNumberOfLines={3}
                    titleVariant="titleLarge"
                    titleStyle={{
                        textAlign: 'center',
                        marginVertical: '2%',
                        color: 'white',
                    }}
                    title={history.name}
                    subtitleStyle={{
                        color: 'white',
                    }}
                    subtitle={history.date}
                />

                <Divider
                    bold={true}
                    style={{
                        borderColor: 'white',
                        borderWidth: 0.5,
                        marginBottom: '1%',
                    }} />

                <Card.Cover style={{ width: '95%', marginHorizontal: 'auto', marginVertical: '2%' }} source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Content>
                    <Text
                        variant="bodyLarge"
                        style={{
                            color: 'white',
                        }}
                    >{history.desc}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={goBack} mode='contained'>Geri Git</Button>
                </Card.Actions>
            </Card>
        </ScrollView>

    );
};

export default History_Details;
