import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import MapView, {Marker, Polygon} from 'react-native-maps';
import styles from '../../styles/Assembly_Area';
import {Button, Text} from 'react-native-paper';
import * as geofirestore from 'geofirestore';
import firestore from '@react-native-firebase/firestore';
import 'firebase/firestore';
import {getLocation} from '../../utils/getLocation';

const GeoFirestore = geofirestore.initializeApp(firestore());
const geocollection = GeoFirestore.collection('assembly_areas');

// ? Alttaki yorum satırı firebasede direkt olarak koordinat eklenmediği için var normal çalışmada yorum satırı olarak kalmalı. Yeni toplanma alanları eklenirken yorum satırlarını kaldırıp ekle.
// const setDatas = async () => {
//   const arr = [
//     {
//       name: 'Acil Durum Toplanma Alanı 50',
//       coordinates: new firestore.GeoPoint(
//         41.601903667319505,
//         32.31545588097394,
//       ),
//       timestamp: firestore.FieldValue.serverTimestamp(),
//     },
//     {
//       name: 'Acil Durum Toplanma Alanı 49',
//       coordinates: new firestore.GeoPoint(
//         41.612326579388004,
//         32.32204926508918,
//       ),
//       timestamp: firestore.FieldValue.serverTimestamp(),
//     },
//     {
//       name: 'Acil Durum Toplanma Alanı 7',
//       coordinates: new firestore.GeoPoint(41.6220057255884, 32.30874019035722),
//       timestamp: firestore.FieldValue.serverTimestamp(),
//     },
//     {
//       name: 'Acil Durum Toplanma Alanı 3',
//       coordinates: new firestore.GeoPoint(
//         41.62653592889241,
//         32.317884950930726,
//       ),
//       timestamp: firestore.FieldValue.serverTimestamp(),
//     },
//     {
//       name: 'Acil Durum Toplanma Alanı 4',
//       coordinates: new firestore.GeoPoint(
//         41.629023309497065,
//         32.32021661611022,
//       ),
//       timestamp: firestore.FieldValue.serverTimestamp(),
//     },
//     {
//       name: 'Acil Durum Toplanma Alanı 8',
//       coordinates: new firestore.GeoPoint(41.62693537243876, 32.32405792705323),
//       timestamp: firestore.FieldValue.serverTimestamp(),
//     },
//     {
//       name: 'Acil Durum Toplanma Alanı 22',
//       coordinates: new firestore.GeoPoint(
//         41.634438078103734,
//         32.32727258657756,
//       ),
//       timestamp: firestore.FieldValue.serverTimestamp(),
//     },
//     {
//       name: 'Acil Durum Toplanma Alanı 20',
//       coordinates: new firestore.GeoPoint(41.63662895886768, 32.32684311741087),
//       timestamp: firestore.FieldValue.serverTimestamp(),
//     },
//     {
//       name: 'Acil Durum Toplanma Alanı 39',
//       coordinates: new firestore.GeoPoint(41.636454419186784, 32.3315387630921),
//       timestamp: firestore.FieldValue.serverTimestamp(),
//     },
//     {
//       name: 'Acil Durum Toplanma Alanı 40',
//       coordinates: new firestore.GeoPoint(
//         41.63489010829583,
//         32.335074641135975,
//       ),
//       timestamp: firestore.FieldValue.serverTimestamp(),
//     },
//     {
//       name: 'Acil Durum Toplanma Alanı 42',
//       coordinates: new firestore.GeoPoint(41.6398140993528, 32.33981382496656),
//       timestamp: firestore.FieldValue.serverTimestamp(),
//     },
//     {
//       name: 'Acil Durum Toplanma Alanı 44',
//       coordinates: new firestore.GeoPoint(41.63970615197379, 32.34536176143301),
//       timestamp: firestore.FieldValue.serverTimestamp(),
//     },
//     {
//       name: 'Acil Durum Toplanma Alanı 48',
//       coordinates: new firestore.GeoPoint(41.6318201642558, 32.336061647388526),
//       timestamp: firestore.FieldValue.serverTimestamp(),
//     },
//     {
//       name: 'Acil Durum Toplanma Alanı 29',
//       coordinates: new firestore.GeoPoint(
//         41.621662040324004,
//         32.344373646832885,
//       ),
//       timestamp: firestore.FieldValue.serverTimestamp(),
//     },
//     {
//       name: 'Acil Durum Toplanma Alanı 32',
//       coordinates: new firestore.GeoPoint(
//         41.62138190872913,
//         32.347612805997635,
//       ),
//       timestamp: firestore.FieldValue.serverTimestamp(),
//     },
//   ];

//   try {
//     for (const data of arr) {
//       await geocollection.add(data);
//     }
//     console.log('Tüm belgeler başarıyla eklendi.');
//   } catch (error) {
//     console.log(error);
//   }

//   await geocollection.add();
// };

const checkLocationPermission = async () => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (!granted) {
      const request = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return request === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  }
  return true;
};
const Assembly_Area = () => {
  const [region, setRegion] = useState({
    latitude: 39.9334,
    longitude: 35.5,
    latitudeDelta: 15,
    longitudeDelta: 20,
  });

  const [userLocation, setUserLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [assemblyAreas, setAssemblyAreas] = useState(null);
  const mapRef = useRef(null);

  const findAssemblyAreas = async () => {
    const hasPermission = await checkLocationPermission();
    if (!hasPermission) {
      Alert.alert(
        'Konum İzni Gerekli',
        'Toplanma alanlarını bulmak için konum izni vermeniz gerekiyor.',
        [{text: 'Tamam'}],
      );
      return;
    }
    setIsLoading(true);
    try {
      // await setDatas();
      const coords = await getLocation();
      const {latitude, longitude} = coords.coords;

      const query = geocollection
        .near({
          center: new firestore.GeoPoint(latitude, longitude),
          radius: 10,
        })
        .limit(3);

      const results = await query.get();
      const docs = results.docs.map(doc => ({id: doc.id, ...doc.data()}));
      setAssemblyAreas(docs);

      mapRef.current.animateToRegion(
        {
          latitude,
          longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        },
        1000,
      );

      setUserLocation({
        latitude,
        longitude,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
          style={{backgroundColor: isLoading ? 'lightgray' : 'green'}}
          textColor="white"
          loading={isLoading}
          disabled={isLoading}
          onPress={findAssemblyAreas}>
          Konumumu Bul
        </Button>
      </View>

      <View style={styles.bottom_container}>
        <MapView
          ref={mapRef}
          style={{width: '100%', height: '100%'}}
          initialRegion={region}>
          {userLocation && (
            <Marker pinColor="cyan" coordinate={userLocation} title="Konumum" />
          )}
          {assemblyAreas?.map((area, index) => {
            console.log(area);
            const {latitude, longitude} = area.coordinates;
            return (
              <Marker
                title={area.name}
                coordinate={{latitude, longitude}}
                key={index}
                pinColor="red"
              />
            );
          })}
        </MapView>
      </View>
    </View>
  );
};
export default Assembly_Area;
