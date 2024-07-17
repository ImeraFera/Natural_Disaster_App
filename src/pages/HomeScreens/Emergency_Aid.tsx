import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import React from 'react';
import styles from '../../styles/Emergency_Aid';
import { Card } from 'react-native-paper';

const Emergency_Aid = () => {



    const callEmergencyNumber = () => {
        Linking.openURL('tel:112');
    };

    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.text} numberOfLines={5} >
                    Aşağıdaki Butona Basıtığınızda Hemen 112'yi Arar!
                </Text>
            </View>
            <TouchableOpacity onPress={callEmergencyNumber}>
                <Image style={styles.img} source={require('../../img/acilYardimButonu.png')} />
            </TouchableOpacity>

        </View>
    );
};

export default Emergency_Aid;
