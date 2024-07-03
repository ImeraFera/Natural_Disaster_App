import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../../styles/Help';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';

const Help = () => {


    const navigation = useNavigation();

    const handlePres = (screenName) => {
        navigation.navigate(screenName);
    }
    return (
        <>
            <View style={styles.container_top}>
                <Card onPress={() => handlePres('GiveHelpScreen')} style={{ padding: 5, backgroundColor: '#00A400', width: '50%', }}>
                    <Card.Cover style={{ backgroundColor: '#00A400', width: 70, height: 70, alignSelf: 'center' }} source={require('../../img/yardimet.png')} />
                    <Card.Title titleVariant='headlineLarge' titleStyle={{ color: 'white', textAlign: 'center' }} title="Yardım Et" />
                </Card>
            </View>
            <View style={styles.container_bottom}>
                <Card onPress={() => handlePres('GetHelpScreen')} style={{ padding: 5, backgroundColor: '#8C64FF', width: '50%', }}>
                    <Card.Cover style={{ backgroundColor: '#8C64FF', width: 70, height: 70, alignSelf: 'center' }} source={require('../../img/yardimal.png')} />
                    <Card.Title titleVariant='headlineLarge' titleStyle={{ color: 'white', textAlign: 'center' }} title="Yardım Al" />
                </Card>
            </View>
        </>


    );
};

export default Help;
