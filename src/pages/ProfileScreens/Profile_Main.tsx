import { ScrollView, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Profile_Main';
import { Button, Dialog, Card, IconButton, Text, TextInput, PaperProvider, Portal, MD3Colors } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';
import iller from '../../tempData/iller.json';
import ilceler from '../../tempData/ilceler.json';

const Profile_Main = () => {

    const [adSoyad, setadSoyad] = useState('adsadas');
    const [tcNo, settcNo] = useState('12312312311');
    const [telefonNo, settelefonNo] = useState();
    const [adres, setadres] = useState();
    const [il, setil] = useState();
    const [ilce, setilce] = useState();
    const [filteredIlceler, setFilteredIlceler] = useState([]);
    const [mail, setmail] = useState('');
    const [dogumTarihi, setdogumTarihi] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [kullaniciResmi, setkullaniciResmi] = useState(null);

    useEffect(() => {
        if (il) {
            const ilId = iller.data.find((city) => city.name === il)?.id;
            const filtered = ilceler.data.filter((district) => district.provinceId === ilId);
            setFilteredIlceler(filtered);
        } else {
            setFilteredIlceler([]);
        }
    }, [il]);

    const options = {
        mediaType: 'photo',
        maxWidth: 100,
        maxHeight: 100,
        quality: 1,
        includeBase64: true,
        selectionLimit: 1,
    };

    const resimSec = async () => {
        const result = await launchImageLibrary(options);
        if (!result.didCancel && result.assets && result.assets.length > 0) {
            setkullaniciResmi(result.assets[0].uri);
            hideDialog();

        }
    };

    const kameraAc = async () => {
        const result = await launchCamera();
        if (!result.didCancel && result.assets && result.assets.length > 0) {
            setkullaniciResmi(result.assets[0].uri);
            hideDialog();
        }

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
                            iconColor="#5A89FF"
                            size={50}
                            onPress={kameraAc}
                        />
                        <IconButton
                            icon="image-area"
                            mode="outlined"
                            iconColor="#5A89FF"
                            size={50}
                            onPress={resimSec}
                        />
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <ScrollView style={styles.container} >
                <Card style={{ backgroundColor: 'white', margin: '5%' }}>
                    <Card.Title titleVariant="titleLarge" titleStyle={{ textAlign: 'center' }} title="Profil Ayarları" />

                    <View style={{ alignItems: 'center' }}>
                        <Card.Cover style={{ width: 100, height: 100, backgroundColor: '#d9d9d9' }}
                            source={kullaniciResmi ? { uri: kullaniciResmi } : require('../../img/user.png')}
                        />
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
                            value={adSoyad}
                            inputMode="text"
                            right={<TextInput.Icon
                                icon="rename-box" />}
                            activeOutlineColor="#5A89FF"
                            mode="outlined"
                            style={styles.input}
                        />

                        <TextInput
                            label="T.C No"
                            value={tcNo}
                            right={<TextInput.Icon
                                icon="card-account-details" />}
                            inputMode="decimal"
                            activeOutlineColor="#5A89FF"
                            mode="outlined"
                            style={styles.input}
                        />
                        <TextInput
                            label="Doğum Tarihi"
                            activeOutlineColor="#5A89FF"
                            right={<TextInput.Icon
                                onPress={() => setOpen(true)}
                                icon="calendar" />}
                            editable={true}
                            value={dogumTarihi.toLocaleDateString()}
                            mode="outlined"
                            style={styles.input} />
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
                        <TextInput
                            label="Telefon Numarası"
                            activeOutlineColor="#5A89FF"
                            right={<TextInput.Icon
                                icon="phone" />}
                            value={telefonNo}
                            inputMode="numeric"
                            maxLength={10}
                            placeholder="Telefon Numaranızı Başında 0 Olmadan Giriniz."
                            mode="outlined"
                            style={styles.input}
                        />
                        <TextInput
                            label="Email"
                            activeOutlineColor="#5A89FF"
                            right={<TextInput.Icon
                                icon="email" />}
                            value={telefonNo}
                            inputMode="email"
                            maxLength={10}
                            placeholder="Email Adresinizi Giriniz."
                            mode="outlined"
                            style={styles.input}
                        />
                        <TextInput
                            label="Adres"
                            activeOutlineColor="#5A89FF"
                            right={<TextInput.Icon
                                icon="home-map-marker" />}
                            value={adres}
                            inputMode="text"
                            numberOfLines={5}
                            mode="outlined"
                            style={styles.input}
                        />

                        <Picker
                            mode="dialog"
                            selectedValue={il}
                            onValueChange={(item) => {
                                setil(item);
                                setilce(null);
                            }}
                        >
                            <Picker.Item label="Lütfen Yaşadığınız İli Seçiniz" value={null} />
                            {iller.data.map((city) => (
                                <Picker.Item key={city.id} label={city.name} value={city.name} />
                            ))}
                        </Picker>
                        <Picker
                            mode="dialog"
                            selectedValue={ilce}
                            onValueChange={(item) => setilce(item)}
                            enabled={filteredIlceler.length > 0}
                        >
                            <Picker.Item label="Lütfen Yaşadığınız İlçeyi Seçiniz" value={null} />
                            {filteredIlceler.map((city) => (
                                <Picker.Item key={city.id} label={city.name} value={city.name} />
                            ))}
                        </Picker>
                    </Card.Content>
                    <Card.Actions style={{ alignSelf: 'center', margin: '1%' }}>
                        <Button style={{ backgroundColor: '#5A89FF' }}
                            mode="contained"
                            onPress={() => console.log('kaydedildi')}
                        >KAYDET</Button>
                    </Card.Actions>
                </Card>
            </ScrollView >
        </PaperProvider>

    );
};

export default Profile_Main;
