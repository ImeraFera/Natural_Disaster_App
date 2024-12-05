import React, {useRef, useState} from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import MapView, {Marker, Polygon} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import styles from '../../styles/Assembly_Area';
import {Button, Text} from 'react-native-paper';
import axios from 'axios';
import {GeoFirestore} from 'geofirestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Assembly_Area = () => {
  const [region, setRegion] = useState({
    latitude: 39.9334,
    longitude: 35.5,
    latitudeDelta: 15,
    longitudeDelta: 20,
  });

  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);

  const geofirestore = new GeoFirestore(firebase.firestore());
  const geoCollection = geofirestore.collection('locations');

  const findLocation = () => {
    Geolocation.getCurrentPosition(
      async position => {
        const {latitude, longitude} = position.coords;
        console.log('Current Location:', latitude, longitude);

        const newRegion = {
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        };

        setRegion(newRegion);
        setUserLocation({latitude, longitude});
        mapRef.current.animateToRegion(newRegion, 1000);

        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`;

        try {
          const query = geoCollection.near({
            center: new firebase.firestore.GeoPoint(latitude, longitude),
            radius: 5,
          });

          const snapshot = await query.get();

          const nearestLocations = snapshot.docs
            .map(doc => ({
              id: doc.id,
              ...doc.data(),
            }))
            .slice(0, 3);

          console.log('En Yakın Konumlar:', nearestLocations);
          const response = await axios.get(url);
          const address = response.data.address;
          console.log('Address:', address);

          const city = address.city || address.town || address.village;
          const district =
            address.state_district || address.county || address.state;
          const neighborhood =
            address.suburb || address.neighbourhood || address.hamlet;

          console.log('City:', city);
          console.log('District:', district);
          console.log('Neighborhood:', neighborhood);
        } catch (error) {
          console.error('Geocoding error:', error);
          Alert.alert(
            'Error',
            'Failed to get address information: ' + error.message,
          );
        }
      },
      error =>
        Alert.alert(
          'Error',
          'Failed to get current location: ' + error.message,
        ),
      {enableHighAccuracy: true, timeout: 30000, maximumAge: 3600000},
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text
          variant="titleLarge"
          style={{color: 'red', fontWeight: 'bold', marginTop: '2%'}}>
          Toplanma Alanları
        </Text>
        <Button
          style={{backgroundColor: 'green'}}
          textColor="white"
          onPress={findLocation}>
          Konumumu Bul
        </Button>
      </View>

      <View style={styles.bottom_container}>
        <MapView
          ref={mapRef}
          style={{width: '100%', height: '100%'}}
          initialRegion={region}>
          {userLocation && (
            <Marker
              coordinate={userLocation}
              title="My Location"
              description="Here is where you are"
            />
          )}
        </MapView>
      </View>
    </View>
  );
};
export default Assembly_Area;
