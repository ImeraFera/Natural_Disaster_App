import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import styles from '../../styles/Assembly_Area';

const Assembly_Area = () => {
    const [currentRegion, setCurrentRegion] = useState({
        latitude: 39.925533,
        longitude: 32.866287,
        latitudeDelta: 20,
        longitudeDelta: 20,
    });

    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                });
            },
            error => {
                Alert.alert('Error', 'Konum alınamadı.');
                console.error(error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Text style={styles.title}>Toplanma Alanları</Text>
                <TouchableOpacity
                    style={{ backgroundColor: 'green', padding: 10, borderRadius: 5 }}
                    onPress={getCurrentLocation}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Konum Bul</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.map_container}>
                <MapView style={styles.map} region={currentRegion}>
                    <Marker
                        coordinate={{ latitude: currentRegion.latitude, longitude: currentRegion.longitude }}
                        title="Buradayım"
                        description="Bu benim konumum"
                    />
                </MapView>
            </View>
        </View>
    );
};

export default Assembly_Area;
