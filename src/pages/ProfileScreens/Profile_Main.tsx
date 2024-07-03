import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import styles from '../../styles/Profile_Main';
import { Button, Dialog, Card, IconButton, Text, TextInput, PaperProvider, Portal, MD3Colors } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';

const Profile_Main = () => {

    const [adSoyad, setadSoyad] = useState('adsadas');
    const [tcNo, settcNo] = useState('12312312311');
    const [dogumTarihi, setdogumTarihi] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [kullaniciResmi, setkullaniciResmi] = useState(null);

    const resimSec = () => {

    };


    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    return (
        <PaperProvider>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title style={{ textAlign: 'center' }} >Resim İçin Kaynak Seçiniz</Dialog.Title>
                    <Dialog.Actions style={{ alignSelf: 'center' }}>
                        <IconButton
                            icon="camera"
                            mode="outlined"
                            iconColor={MD3Colors.error50}
                            size={50}
                            onPress={() => resimSec}
                        />
                        <IconButton
                            icon="image-area"
                            mode="outlined"
                            iconColor={MD3Colors.error50}
                            size={50}
                            onPress={() => resimSec}
                        />
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <ScrollView style={styles.container} >
                <Card style={{ backgroundColor: 'white', margin: '5%' }}>
                    <Card.Title titleVariant="titleLarge" titleStyle={{ textAlign: 'center' }} title="Profil Ayarları" />

                    <View style={{ alignItems: 'center' }}>
                        <Card.Cover style={{ width: 100, height: 100, backgroundColor: '#d9d9d9' }} source={require('../../img/user.png')} />
                        <Button icon="camera"
                            style={{ borderColor: '#5A89FF', width: '60%', marginVertical: '2%' }}
                            onPress={showDialog}
                            mode="outlined"
                            textColor="#5A89FF"

                        >RESMİ GÜNCELLE</Button>
                    </View>
                    <Card.Content style={{ marginVertical: '2%', padding: 5 }} >
                        <TextInput
                            label="Ad-Soyad"
                            disabled={true}
                            value={adSoyad}
                            inputMode="text"
                            mode="outlined" style={{ backgroundColor: 'white', marginBottom: 5 }} />
                        <TextInput
                            label="T.C No"
                            disabled={true}
                            value={tcNo}
                            inputMode="decimal"
                            mode="outlined" style={{ backgroundColor: 'white', marginBottom: 5 }} />
                        <TextInput
                            label="Doğum Tarihi"

                            right={<TextInput.Icon
                                onPress={() => setOpen(true)}
                                icon="calendar" />}
                            editable={false}
                            value={dogumTarihi.toLocaleDateString()}
                            mode="outlined" style={{ backgroundColor: 'white', marginBottom: 5 }} />
                        <DatePicker
                            modal
                            open={open}
                            date={dogumTarihi}
                            mode="date"
                            onConfirm={(date) => {
                                setOpen(false);
                                setdogumTarihi(date);
                            }}
                            onCancel={() => {
                                setOpen(false);
                            }}
                        />

                    </Card.Content>
                    <Card.Actions>
                        <Button style={{ backgroundColor: '#5A89FF' }} mode="contained">KAYDET</Button>
                    </Card.Actions>
                </Card>
            </ScrollView >
        </PaperProvider>

    );
};

export default Profile_Main;
