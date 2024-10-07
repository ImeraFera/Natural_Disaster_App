import { View, ScrollView, TouchableOpacity, Platform, PermissionsAndroid } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles/Declaration_Details_Card';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, Modal, Button, Card, Divider, PaperProvider, Portal } from 'react-native-paper';
import { Linking } from 'react-native';

const Declaration_Details_Card = () => {

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const handleCall = async () => {
        const phoneNumber = item.contact1;
        const phoneUrl = `tel:${phoneNumber}`;

        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CALL_PHONE,
                    {
                        title: 'Phone Call Permission',
                        message: 'This app needs access to your phone calls',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    Linking.openURL(phoneUrl);
                } else {
                    console.log('Call Phone permission denied');
                }
            } catch (err) {
                console.warn(err);
            }
        } else {
            Linking.openURL(phoneUrl)
                .catch(err => console.error('An error occurred', err));
        }
    };

    const route = useRoute();
    const { item } = route.params;

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <Card style={styles.container}>
            <Card.Cover source={{ uri: item.photo }} />
            <Card.Title titleVariant="headlineSmall"
                titleStyle={{ fontWeight: 'bold', textAlign: 'center' }}
                title={item.name} />
            <Card.Content>
                <Text variant="titleLarge">Cinsiyet: <Text style={{ fontWeight: 'bold' }} >{(item.gender == 'Man') ? 'Erkek' : 'Kadın'}</Text></Text>
                <Divider />
                <Text variant="titleLarge">Yaş:
                    <Text style={{ fontWeight: 'bold' }}>
                        {item.age}</Text>
                </Text>
                <Divider />

                <Text variant="titleLarge">Son Görülme Yeri:
                    <Text style={{ fontWeight: 'bold' }}>
                        {item.lastPlace}
                    </Text>
                </Text>
                <Divider />

                <Text variant="titleLarge">Detaylar:
                    <Text style={{ fontWeight: 'bold' }}>
                        {item.details}</Text>
                </Text>
                <Divider />
                <Text variant="titleLarge">Kaybolma Tarihi:
                    <Text style={{ fontWeight: 'bold' }}>
                        {item.date}</Text>
                </Text>

                <Divider />

                <Text variant="titleLarge">İletişim:
                    <Text style={{ fontWeight: 'bold' }}>
                        {item.contact1}</Text>
                </Text>
                <Divider />

                <Text variant="titleLarge">İletişim:
                    <Text style={{ fontWeight: 'bold' }}>
                        {item.contact2}</Text>
                </Text>
                <Divider />

                <Text variant="titleLarge">Ödül:
                    <Text style={{ fontWeight: 'bold' }}>
                        {item.prize ? item.prize + " TL" : 'Yok'}</Text>
                </Text>
            </Card.Content>
            <Card.Actions >
                <Button
                    labelStyle={{ fontSize: 16 }}
                    style={{ marginRight: 'auto' }}

                    onPress={goBack}>Geri Git</Button>
                <Button
                    labelStyle={{ fontSize: 16 }}
                    style={{ marginLeft: 'auto' }}

                    onPress={showModal}>Gördüm, Haber Ver!</Button>
            </Card.Actions>


            <Portal>
                <Modal
                    contentContainerStyle={{ backgroundColor: 'white', width: '90%', alignSelf: 'center', padding: 20 }}
                    visible={visible} onDismiss={hideModal} >
                    <Text variant="titleLarge" style={{ textAlign: 'center', fontWeight: 'bold' }}>Gördüğünüze Emin Misiniz ? Eğer Eminseniz Kayıp İlanı Veren Kişiyle Görüşmeniz Rica Olunur.</Text>
                    <Card.Actions>
                        <Button
                            onPress={hideModal}
                            style={{ marginRight: 'auto' }}>
                            Emin Deiğilim</Button>
                        <Button
                            onPress={handleCall}
                            style={{ marginLeft: 'auto' }}
                        >Eminim</Button>
                    </Card.Actions>
                </Modal>
            </Portal>
        </Card >
    );
};

export default Declaration_Details_Card;
