import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import styles from '../../styles/GiveHelp';
import Help_List_Card from '../../Components/Help_List_Card';

const data = [
    {
        'id': '1',
        'name': 'Ahmet Furkan Sayan',
        'date': '12.12.9999',
        'disasterType': 'Deprem',
        'helpType': 'Gıda',
        'location': 'İstanbul',
    },
    {
        'id': '2',
        'name': 'Ayşe Yılmaz',
        'date': '15.05.2023',
        'disasterType': 'Sel',
        'helpType': 'İlaç',
        'location': 'İzmir',
    },
    {
        'id': '3',
        'name': 'Mehmet Ali Özkan',
        'date': '20.09.2022',
        'disasterType': 'Yangın',
        'helpType': 'Kıyafet',
        'location': 'Ankara',
    },
    {
        'id': '4',
        'name': 'Fatma Kaya',
        'date': '01.01.2024',
        'disasterType': 'Fırtına',
        'helpType': 'Temizlik Malzemesi',
        'location': 'Adana',
    },
    {
        'id': '5',
        'name': 'Mustafa Demir',
        'date': '03.04.2023',
        'disasterType': 'Deprem',
        'helpType': 'Su',
        'location': 'İstanbul',
    },
    {
        'id': '6',
        'name': 'Zeynep Şahin',
        'date': '07.07.2023',
        'disasterType': 'Sel',
        'helpType': 'Battaniye',
        'location': 'İzmir',
    },
    {
        'id': '7',
        'name': 'Ali Can',
        'date': '11.11.2022',
        'disasterType': 'Yangın',
        'helpType': 'Kuru Gıda',
        'location': 'Ankara',
    },
    {
        'id': '8',
        'name': 'Ayşe Kaya',
        'date': '09.08.2023',
        'disasterType': 'Deprem',
        'helpType': 'İlaç',
        'location': 'İstanbul',
    },
    {
        'id': '9',
        'name': 'Fatih Yılmaz',
        'date': '25.12.2023',
        'disasterType': 'Sel',
        'helpType': 'Battaniye',
        'location': 'İzmir',
    },
    {
        'id': '10',
        'name': 'Selin Demir',
        'date': '30.06.2024',
        'disasterType': 'Yangın',
        'helpType': 'Su',
        'location': 'Ankara',
    },
];



const Help = () => {

    const renderItem = ({ item }) => (
        <Help_List_Card props={item} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Yardım İlan Listesi</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={{ flex: 1 }}
            />
        </View>

    );
};

export default Help;
