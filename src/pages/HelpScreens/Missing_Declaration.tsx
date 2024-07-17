import { View, Text, FlatList, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/Missing_Declaration';
import Missing_Declaration_Card from '../../Components/Missing_Declaration_Card';
import { Appbar, Button, Divider, RadioButton, Searchbar } from 'react-native-paper';

const data = [
    {
        id: '1',
        name: 'John Doe',
        age: 30,
        gender: 'Erkek',
        dateLost: '2024-07-01',
        locationLost: 'İstanbul, Beşiktaş',
        description: 'Siyah saç, mavi gözler, kırmızı mont',
        reward: '1000 TL',
        additionalInfo: 'Epilepsi hastası, ilaç kullanıyor',
        contact: {
            phone: '5551234567',
            email: 'johndoe@example.com',
        },
        photo: 'https://picsum.photos/700',
    },
    {
        id: '2',
        name: 'Jane Smith',
        age: 25,
        gender: 'Kadın',
        dateLost: '2024-06-15',
        locationLost: 'Ankara, Çankaya',
        description: 'Kumral saç, yeşil gözler, mavi elbise',
        reward: '500 TL',
        additionalInfo: 'Alerjik, özel diyet yapıyor',
        contact: {
            phone: '5559876543',
            email: 'janesmith@example.com',
        },
        photo: 'https://picsum.photos/700',
    },
    {
        id: '3',
        name: 'Michael Johnson',
        age: 35,
        gender: 'Erkek',
        dateLost: '2024-07-05',
        locationLost: 'İzmir, Konak',
        description: 'Kısa siyah saç, kahverengi gözler, siyah ceket',
        reward: '1500 TL',
        additionalInfo: 'Sigara içmiyor, spor yapıyor',
        contact: {
            phone: '5554567890',
            email: 'michaeljohnson@example.com',
        },
        photo: 'https://picsum.photos/700',
    },
];

const Missing_Declaration = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        if (searchQuery === '') {
            setFilteredData(data);
        } else {
            const filtered = data.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.locationLost.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredData(filtered);
        }
    }, [searchQuery]);

    const renderItem = ({ item }) => (
        <Missing_Declaration_Card props={item} />
    );

    return (
        <View style={styles.container}>
            <Appbar.Header style={{ backgroundColor: '#d9d9d9' }}>
                <Searchbar
                    style={{ backgroundColor: 'white' }}
                    placeholderTextColor="red"
                    iconColor="red"
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                />

            </Appbar.Header>
            <Divider />
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={{ flex: 1 }}
            />

        </View>
    );
};

export default Missing_Declaration;
