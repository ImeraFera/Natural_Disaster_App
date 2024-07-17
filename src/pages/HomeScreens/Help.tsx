import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../../styles/Help';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';

const Help = () => {
    const navigation = useNavigation();

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.container}>
            <View style={styles.col_left}>
                <Card
                    onPress={() => goTo('GiveHelpScreen')}
                    style={{
                        alignItems: 'center',
                        backgroundColor: '#B10098',
                    }}
                    mode="contained"
                >
                    <Card.Cover
                        style={{ backgroundColor: '#B10098', width: 160, height: 160, padding: '2%' }}
                        source={require('../../img/yardimet.png')} />
                    <Card.Title titleVariant="titleLarge" title="Yardım Et" titleStyle={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }} />

                </Card>
                <Card
                    onPress={() => goTo('GetHelpScreen')}
                    style={{
                        alignItems: 'center',
                        backgroundColor: '#FF6400',
                    }}
                    mode="contained"
                >
                    <Card.Cover
                        style={{ backgroundColor: '#FF6400', width: 160, height: 160, padding: '2%' }}
                        source={require('../../img/yardimal.png')} />
                    <Card.Title titleVariant="titleLarge" title="Yardım Al"
                        titleStyle={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }} />

                </Card>
            </View>
            <View style={styles.col_right}>

                <Card
                    onPress={() => goTo('MissingDeclarationScreen')}

                    style={{
                        alignItems: 'center',
                        backgroundColor: '#00A400',
                    }}
                    mode="contained"
                >
                    <Card.Cover
                        style={{ backgroundColor: '#00A400', width: 160, height: 160, padding: '2%' }}
                        source={require('../../img/kayipIlanlarim.png')} />
                    <Card.Title titleVariant="titleLarge" title="Kayıp Listesi" titleStyle={{ fontWeight: 'bold', color: 'white' }} />

                </Card>
                <Card
                    onPress={() => goTo('DeclarationSettingsScreen')}

                    style={{
                        alignItems: 'center',
                        backgroundColor: '#8C64FF',
                    }}
                    mode="contained"
                >
                    <Card.Cover
                        style={{ backgroundColor: '#8C64FF', width: 160, height: 160, padding: '2%' }}
                        source={require('../../img/kayipKisi.png')} />
                    <Card.Title titleVariant="titleLarge" title="Kayıp İlanım"
                        titleStyle={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }} />

                </Card>
            </View>
            {/* <Card onPress={() => goTo('GiveHelpScreen')} style={{ padding: '2%', backgroundColor: '#00A400', }}>
                <Card.Cover style={{ backgroundColor: '#00A400', width: 70, height: 70, alignSelf: 'center' }} source={require('../../img/yardimet.png')} />
                <Card.Title titleVariant="titleLarge" titleStyle={{ color: 'white', textAlign: 'center' }} title="Yardım Et" />
            </Card>
            <Card onPress={() => goTo('GetHelpScreen')} style={{ padding: '2%', backgroundColor: '#8C64FF', }}>
                <Card.Cover style={{ backgroundColor: '#8C64FF', width: 70, height: 70, alignSelf: 'center' }} source={require('../../img/yardimal.png')} />
                <Card.Title titleVariant="titleLarge" titleStyle={{ color: 'white', textAlign: 'center' }} title="Yardım Al" />
            </Card>
            <Card onPress={() => goTo('MissingDeclarationScreen')} style={{ padding: '2%', backgroundColor: '#FF6400', }}>
                <Card.Cover style={{ backgroundColor: '#FF6400', }} source={require('../../img/kayipKisi.png')} />
                <Card.Title titleVariant="titleLarge" titleStyle={{ color: 'white', textAlign: 'center' }} title="Kayıp İlanları" />
            </Card>
            <Card onPress={() => goTo('MissingDeclarationScreen')} style={{ padding: '2%', backgroundColor: '#FF6400', }}>
                <Card.Cover style={{ backgroundColor: '#FF6400', width: 70, height: 70, alignSelf: 'center' }} source={require('../../img/kayipKisi.png')} />
                <Card.Title titleVariant="titleLarge" titleStyle={{ color: 'white', textAlign: 'center' }} title="Kayıp İlanları" />
            </Card> */}
        </View>


    );
};

export default Help;
