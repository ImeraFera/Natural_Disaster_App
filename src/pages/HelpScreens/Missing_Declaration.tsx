import { View, Text, FlatList, Modal, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/Missing_Declaration';
import Missing_Declaration_Card from '../../Components/Missing_Declaration_Card';
import { Appbar, Button, Divider, RadioButton, Searchbar } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import { Picker } from '@react-native-picker/picker';



const Missing_Declaration = () => {

    const [declarations, setDeclarations] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDeclarations, setFilteredDeclarations] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            const querySnapshot = await firestore().collection('missing_people').get();

            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            setDeclarations(data);
            setFilteredDeclarations(data);
        } catch (error) {
            console.log('Veri çekilirken bir hata oluştu:', error);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, []);

    useEffect(() => {
        const filteredData = declarations.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.lastPlace.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.details.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredDeclarations(filteredData);
    }, [searchQuery, declarations]);

    const renderItem = ({ item }) => (
        <Missing_Declaration_Card props={item} />
    );

    if (loading) {
        return (
            <ActivityIndicator size="large" color="#0000ff" />
        );
    }

    return (
        <View style={styles.container}>
            <View >
                <Appbar.Header style={{ backgroundColor: '#d9d9d9', }}>
                    <Searchbar
                        style={{ backgroundColor: 'white', }}
                        placeholderTextColor="red"
                        iconColor="red"
                        placeholder="Search"
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                    />
                </Appbar.Header>
            </View>
            <Divider />
            <FlatList
                data={filteredDeclarations}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={{ flex: 1 }}
            />


        </View>
    );
};

export default Missing_Declaration;
