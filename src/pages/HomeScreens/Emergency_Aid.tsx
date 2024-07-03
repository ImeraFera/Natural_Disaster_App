import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import React from 'react';
import styles from '../../styles/Emergency_Aid';
import { Card } from 'react-native-paper';

const Emergency_Aid = () => {



    const callEmergencyNumber = () => {
        Linking.openURL('tel:112');
    }

    return (
        <View style={styles.container}>
            <Card style={{ backgroundColor: 'red', padding: 10, margin: '2%' }}>
                <Card.Title titleNumberOfLines={5} titleVariant='titleLarge' titleStyle={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }} title="Aşağıdaki Butona Basıtığınızda Hemen 112'yi Arar!" />
            </Card>
            <Card mode='contained' style={{
                margin: 'auto',
                width: '90%',
                height: '80%',

            }}>
                <TouchableOpacity onPress={callEmergencyNumber}>
                    <Card.Cover style={{
                        backgroundColor: '#d9d9d9',
                        width: '100%',
                        height: '100%',
                    }}
                        source={require('../../img/acilYardimButonu.png')} />
                </TouchableOpacity>
            </Card>
        </View>
    );
};

export default Emergency_Aid;
