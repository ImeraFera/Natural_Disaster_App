
import { View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import { TextInput, Text, Checkbox, Button } from 'react-native-paper';
import styles from '../../styles/GetHelp';

const Get_Help = () => {
    const [afetTarihi, setAfetTarihi] = useState('');
    const [durumTanimi, setDurumTanimi] = useState('');
    const [adres, setAdres] = useState('');
    const [ekBilgiler, setEkBilgiler] = useState('');

    const [selectedDamage, setSelectedDamage] = useState('Low');
    const [selectedHelpType, setYardimTuru] = useState('Low');
    const [afetTuru, setAfetTuru] = React.useState('');
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = React.useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Yardım Talep Etme Formu</Text>
            <View style={styles.container2}>
                <ScrollView style={styles.container_form}>
                    <View style={styles.form_elements}>
                        <Text variant="labelLarge" >Afet Türü</Text>
                        <Picker style={styles.picker}
                            selectedValue={afetTuru}
                            onValueChange={(itemValue) => setAfetTuru(itemValue)} >
                            <Picker.Item label="Lütfen Afet Türünü Seçiniz" />
                            <Picker.Item label="Deprem" value="Eartquake" />
                            <Picker.Item label="Sel" value="Flood" />
                            <Picker.Item label="Heyelan" value="Landslide" />
                            <Picker.Item label="Çığ" value="Avalanche" />
                            <Picker.Item label="Yangın" value="Fire" />
                            <Picker.Item label="Diğer" value="Other" />
                        </Picker>
                    </View>

                    <View style={styles.form_elements}>
                        <Text variant="labelLarge">Afet Tarihi:</Text>
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
                        <TextInput
                            style={{ backgroundColor: '#D9D9D9' }}
                            activeUnderlineColor="red"
                            mode="flat"
                            label="Durum Tanımı"
                            numberOfLines={5}
                            right={<TextInput.Icon onPress={() => setOpen(true)} icon="state-machine" />}
                            value={durumTanimi}
                            onChangeText={text => setDurumTanimi(text)}
                        />
                    </View>
                    <View style={styles.form_elements}>
                        <Text variant="labelLarge" >Hasar Durumu:</Text>
                        <Picker style={styles.picker}
                            selectedValue={selectedDamage}
                            onValueChange={(itemValue) => setSelectedDamage(itemValue)} >
                            <Picker.Item label="Az" value="Low" />
                            <Picker.Item label="Orta" value="Medium" />
                            <Picker.Item label="Ağır" value="High" />
                        </Picker>
                    </View>
                    <View style={styles.form_elements}>
                        <Text variant="labelLarge">Yardım Türü:</Text>
                        <Picker style={styles.picker}
                            selectedValue={selectedHelpType}
                            onValueChange={(itemValue) => setYardimTuru(itemValue)} >
                            <Picker.Item label="Gıda" value="Food" />
                            <Picker.Item label="Kıyafet" value="Clothe" />
                            <Picker.Item label="Barınma" value="Shelter" />
                            <Picker.Item label="Tıbbi Yardım" value="Medical" />
                            <Picker.Item label="Psikolojik Destek" value="PsychologySupport" />
                            <Picker.Item label="Diğer" value="Other" />
                        </Picker>
                    </View>
                    <View style={styles.form_elements}>
                        <Text variant="labelLarge">Daha Önce Yardım Aldınız Mı?</Text>
                        <Checkbox
                            color="red"
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                    </View>
                    <View style={styles.form_elements}>
                        <TextInput
                            contentStyle={{ backgroundColor: '#D9D9D9' }}
                            activeUnderlineColor="red"
                            mode="flat"
                            label="Adres"
                            numberOfLines={5}
                            value={adres}
                            onChangeText={text => setAdres(text)}
                        />
                    </View>
                    <View style={styles.form_elements}>
                        <TextInput
                            contentStyle={{ backgroundColor: '#D9D9D9' }}
                            activeUnderlineColor="red"
                            mode="flat"
                            label="Ek Bilgiler"
                            numberOfLines={5}
                            value={ekBilgiler}
                            onChangeText={text => setEkBilgiler(text)}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button mode="contained" buttonColor="#E30014" onPress={() => console.log('Pressed')}>
                            GÖNDER
                        </Button>
                    </View>

                </ScrollView>
            </View >
        </View >


    );
};

export default Get_Help;
