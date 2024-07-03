import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import styles from '../../styles/Profile_Main';
import { Button, Card, IconButton, Text, TextInput } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';

const Profile_Main = () => {

    const [adSoyad, setadSoyad] = useState('adsadas');
    const [dogumTarihi, setdogumTarihi] = useState("");

    return (
        <ScrollView style={styles.container} >
            <Card style={{ backgroundColor: 'white', margin: '5%' }}>
                <Card.Title titleVariant="titleLarge" titleStyle={{ textAlign: 'center' }} title="Profil Ayarları" />

                <View style={{ alignItems: 'center' }}>
                    <Card.Cover style={{ width: 100, height: 100, backgroundColor: '#d9d9d9' }} source={require('../../img/user.png')} />
                    <Button icon="camera"
                        style={{ borderColor: '#5A89FF', width: '30%', marginVertical: '2%' }}
                        mode="outlined"
                        textColor="#5A89FF"
                        onPress={() => console.log('object')}
                    >Change</Button>
                </View>
                <Card.Content style={{ marginVertical: '2%', padding: 5, }} >
                    <TextInput

                        label="Ad-Soyad"
                        disabled={true}
                        value={adSoyad}
                        inputMode="text"
                        mode="outlined" style={{ backgroundColor: 'white', marginBottom: 5 }} />
                    <DatePicker >

                    </DatePicker>
                    <TextInput
                        label="Name"
                        value={adSoyad}
                        inputMode="text"
                        mode="outlined" style={{ backgroundColor: 'white', marginBottom: 5 }} />
                    <TextInput
                        label="Name"
                        disabled={true}
                        value={adSoyad}
                        inputMode="text"
                        mode="outlined" style={{ backgroundColor: 'white', marginBottom: 5 }} />
                    <TextInput
                        label="Name"
                        disabled={true}
                        value={adSoyad}
                        inputMode="text"
                        mode="outlined" style={{ backgroundColor: 'white' }} />
                </Card.Content>
                <Card.Actions>
                    <Button style={{ backgroundColor: '#5A89FF' }} mode="contained">KAYDET</Button>
                </Card.Actions>
            </Card>
        </ScrollView >
    );
};

export default Profile_Main;
