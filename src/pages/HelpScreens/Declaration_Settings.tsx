import { View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import { TextInput, Text, Checkbox, Button, Switch } from 'react-native-paper';
import styles from '../../styles/GetHelp';
import database from '@react-native-firebase/database';



const Declaration_Settings = () => {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [details, setDetails] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [homeAdress, setHomeAdress] = useState('');
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [rewardAmount, setRewardAmount] = useState('');


    const handleSubmit = () => {
        const data = {
            name,
            gender,
            age,
            location,
            details,
            tel,
            email,
            homeAdress,
            date: date.toISOString(),
            rewardAmount: isChecked ? rewardAmount : null
        };

        database().ref('declarations/');
    };

    const sendData = (data) => {

        const dataObj = {
            ...data,
            owner: "",
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Kayıp İlanı Formu</Text>
            <View style={styles.container2}>
                <ScrollView style={styles.container_form}>
                    <View style={styles.form_elements}>
                        <Text variant="labelLarge">Ad-Soyad:</Text>
                        <TextInput
                            style={{ backgroundColor: '#D9D9D9' }}
                            activeUnderlineColor="red"
                            mode="flat"
                            label="Kayıp Kişinin Adı-Soyadı"
                            numberOfLines={1}
                            value={name}
                            onChangeText={text => setName(text)}
                        />
                    </View>
                    <View style={styles.form_elements}>
                        <Text variant="labelLarge">Cinsiyet:</Text>
                        <Picker style={styles.picker}
                            selectedValue={gender}
                            onValueChange={(itemValue) => setGender(itemValue)} >
                            <Picker.Item label="Lütfen Cinsiyet Seçiniz" value="" />
                            <Picker.Item label="Kadın" value="Woman" />
                            <Picker.Item label="Erkek" value="Man" />
                        </Picker>
                    </View>
                    <View style={styles.form_elements}>
                        <Text variant="labelLarge">Yaş:</Text>
                        <TextInput
                            style={{ backgroundColor: '#D9D9D9' }}
                            activeUnderlineColor="red"
                            mode="flat"
                            label="Kayıp Kişinin Yaşı"
                            numberOfLines={1}
                            value={age}
                            onChangeText={text => setAge(text)}
                        />
                    </View>
                    <View style={styles.form_elements}>
                        <Text variant="labelLarge">Kayıp Yeri:</Text>
                        <TextInput
                            style={{ backgroundColor: '#D9D9D9' }}
                            activeUnderlineColor="red"
                            mode="flat"
                            label="Son Görüldüğü Yer"
                            numberOfLines={1}
                            value={location}
                            onChangeText={text => setLocation(text)}
                        />
                    </View>
                    <View style={styles.form_elements}>
                        <Text variant="labelLarge">Kayıp Tarihi:</Text>
                        <TextInput onPress={() => setOpen(true)}
                            mode="flat"
                            style={{ backgroundColor: '#D9D9D9' }}
                            value={date.toLocaleDateString('tr-TR')}
                            activeUnderlineColor="red"
                            right={<TextInput.Icon onPress={() => setOpen(true)} icon="calendar" />}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <DatePicker
                                modal
                                open={open}
                                date={date}
                                mode="date"
                                onConfirm={(newDate) => {
                                    setOpen(false);
                                    setDate(newDate);
                                }}
                                onCancel={() => {
                                    setOpen(false);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.form_elements}>
                        <Text variant="labelLarge">Detaylar:</Text>
                        <TextInput
                            contentStyle={{ backgroundColor: '#D9D9D9' }}
                            activeUnderlineColor="red"
                            mode="flat"
                            label="Kayıp Kişinin Giydiği Kıyafetler vb."
                            numberOfLines={5}
                            value={details}
                            onChangeText={text => setDetails(text)}
                        />
                    </View>
                    <View style={styles.form_elements}>
                        <Text variant="labelLarge">İletişim 1:</Text>
                        <TextInput
                            contentStyle={{ backgroundColor: '#D9D9D9' }}
                            activeUnderlineColor="red"
                            mode="flat"
                            label="Telefon Numaranızı Giriniz"
                            numberOfLines={1}
                            value={tel}
                            onChangeText={text => setTel(text)}
                        />
                    </View>
                    <View style={styles.form_elements}>
                        <Text variant="labelLarge">İletişim 2:</Text>
                        <TextInput
                            contentStyle={{ backgroundColor: '#D9D9D9' }}
                            activeUnderlineColor="red"
                            mode="flat"
                            label="Email Adresinizi Giriniz"
                            numberOfLines={1}
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                    </View>
                    <View style={styles.form_elements}>
                        <Text variant="labelLarge">Adres:</Text>
                        <TextInput
                            contentStyle={{ backgroundColor: '#D9D9D9' }}
                            activeUnderlineColor="red"
                            mode="flat"
                            label="Ev Adresinizi Giriniz"
                            numberOfLines={5}
                            value={homeAdress}
                            onChangeText={text => setHomeAdress(text)}
                        />
                    </View>
                    <View style={styles.form_elements}>
                        <Checkbox.Item
                            label="Ödül Vermek İstiyorum"
                            status={isChecked ? 'checked' : 'unchecked'}
                            onPress={() => setIsChecked(!isChecked)}
                        />
                    </View>
                    {isChecked && (
                        <View style={styles.form_elements}>
                            <Text variant="labelLarge">Ödül Miktarı (TL):</Text>
                            <TextInput
                                contentStyle={{ backgroundColor: '#D9D9D9' }}
                                activeUnderlineColor="red"
                                mode="flat"
                                inputMode="decimal"
                                label="Ödül Miktarını Giriniz"
                                numberOfLines={1}
                                value={rewardAmount}
                                onChangeText={amount => setRewardAmount(amount)}
                            />
                        </View>
                    )}
                    <View style={styles.button}>
                        <Button mode="contained" buttonColor="#E30014" onPress={handleSubmit}>
                            GÖNDER
                        </Button>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};
export default Declaration_Settings;
