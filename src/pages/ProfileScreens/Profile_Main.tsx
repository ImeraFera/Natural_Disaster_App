
import { ActivityIndicator, ScrollView, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import styles from '../../styles/Profile_Main';
import { Button, Dialog, Card, IconButton, Text, TextInput, PaperProvider, Portal, MD3Colors } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';
import iller from '../../tempData/iller.json';
import ilceler from '../../tempData/ilceler.json';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';

const Profile_Main = () => {

    const userData = useSelector(s => s.userData);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [kullaniciResmi, setkullaniciResmi] = useState(null);

    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const handleUpdate = async (values) => {
        setLoading(true);

        try {
            await firestore().collection('users').doc(auth().currentUser?.uid).update(values);

            dispatch({
                type: 'UPDATE_USER',
                payload: {
                    name: values.name,
                    address: values.address,
                    birthday: values.birthday,
                    district: values.district,
                    tel: values.tel,
                    province: values.province,
                },
            });

            Toast.show({
                type: 'success',
                position: 'top',
                text1: 'Güncelleme Başarılı',
                text2: 'Profil bilgileriniz güncellendi.',
            });
            setLoading(false);

            navigation.navigate('ProfileMain_Screen');
        } catch (error) {
            console.error('Güncelleme Hatası:', error);
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Güncelleme Hatası',
                text2: 'Profil bilgileriniz güncellenemedi.',
            }); qand
        }
    };


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

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

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

                    <Formik
                        initialValues={{
                            mail: auth().currentUser?.email,
                            tcNo: userData?.tcNo || '',
                            address: userData?.address || '',
                            birthday: userData?.birthday || '',
                            district: userData?.district || '',
                            province: userData?.province || '',
                            tel: userData?.tel || '',
                            name: userData?.name || '',
                        }}
                        onSubmit={handleUpdate}
                    >
                        {
                            ({ handleChange, handleSubmit, values }) => (
                                <>
                                    <Card.Content style={{ marginVertical: '2%', padding: 5 }} >
                                        <TextInput
                                            label="Ad-Soyad"
                                            value={values.name}
                                            activeOutlineColor="#5A89FF"

                                            onChangeText={handleChange('name')}
                                            mode="outlined"
                                            style={styles.input}
                                            right={<TextInput.Icon icon="rename-box" />}
                                        />
                                        <TextInput
                                            label="T.C No"
                                            value={values.tcNo}
                                            editable={false}
                                            activeOutlineColor="#5A89FF"
                                            mode="outlined"
                                            style={styles.input}
                                            right={<TextInput.Icon icon="card-account-details" />}
                                        />
                                        <TextInput
                                            label="Doğum Tarihi"
                                            textColor="black"
                                            activeOutlineColor="#5A89FF"
                                            value={values.birthday}
                                            right={<TextInput.Icon
                                                onPress={() => setOpen(true)}
                                                icon="calendar" />}
                                            editable={true}
                                            mode="outlined"
                                            style={styles.input}
                                        />
                                        <DatePicker
                                            modal
                                            open={open}
                                            date={new Date(values.birthday || new Date())}
                                            mode="date"
                                            onConfirm={(date) => {
                                                setOpen(false);
                                                const formattedDate = date.toISOString().split('T')[0];
                                                handleChange('birthday')(formattedDate);
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
                                            value={values.tel}
                                            inputMode="numeric"
                                            onChangeText={handleChange('tel')}
                                            textColor="black"
                                            maxLength={10}
                                            placeholder="Telefon Numaranızı 0 Olmadan Giriniz."
                                            mode="outlined"
                                            style={styles.input}
                                        />
                                        <TextInput
                                            label="Email"
                                            activeOutlineColor="#5A89FF"
                                            right={<TextInput.Icon
                                                icon="email" />}
                                            value={values.mail}
                                            readOnly={true}
                                            onChangeText={handleChange('mail')}
                                            textColor="black"
                                            inputMode="email"
                                            maxLength={10}
                                            placeholder="Email Adresinizi Giriniz."
                                            mode="outlined"
                                            style={styles.input}
                                        />

                                        <TextInput
                                            label="İl"
                                            activeOutlineColor="#5A89FF"
                                            onChangeText={handleChange('province')}
                                            value={values.province}
                                            inputMode="text"
                                            textColor="black"
                                            mode="outlined"
                                            style={styles.input}
                                        />
                                        <TextInput
                                            label="İlçe"
                                            activeOutlineColor="#5A89FF"
                                            onChangeText={handleChange('district')}
                                            value={values.district}
                                            inputMode="text"
                                            textColor="black"
                                            mode="outlined"
                                            style={styles.input}
                                        />
                                        <TextInput
                                            label="Adres"
                                            activeOutlineColor="#5A89FF"
                                            onChangeText={handleChange('address')}

                                            right={<TextInput.Icon
                                                icon="home-map-marker" />}
                                            value={values.address}
                                            inputMode="text"
                                            textColor="black"
                                            numberOfLines={5}
                                            mode="outlined"
                                            style={styles.input}
                                        />

                                    </Card.Content>
                                    <Card.Actions style={{ alignSelf: 'center', margin: '1%' }}>
                                        <Button style={{ backgroundColor: '#5A89FF' }}
                                            mode="contained"
                                            textColor="white"
                                            onPress={handleSubmit}
                                        >KAYDET</Button>
                                    </Card.Actions>
                                </>
                            )
                        }
                    </Formik>

                </Card>
            </ScrollView >
        </PaperProvider>

    );
};

export default Profile_Main;
