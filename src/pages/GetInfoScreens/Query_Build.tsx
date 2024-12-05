import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from '../../styles/Query_Builder';
import {validationSchema} from '../../validationSchemas/QueryBuildSchema';
import {
  Button,
  Card,
  Dialog,
  Paragraph,
  Portal,
  Provider,
  TextInput,
} from 'react-native-paper';
import {Formik} from 'formik';
import MapView, {Marker} from 'react-native-maps';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';
const geocodeApiKey = '67260f5fb929a660736537xqte7b09a';
import firestore, {getFirestore} from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import {calculateDistance} from '../../utils/calculateDistance';
import * as geofirestore from 'geofirestore';

const getLocation = () =>
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });
const Query_Build = () => {
  const [region, setRegion] = useState({
    latitude: 41.6132807816993,
    longitude: 32.32117788484015,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [isLoading, setisLoading] = useState(false);
  const [visibleDialog, setvisibleDialog] = useState(false);
  const isAuth = useSelector(({user}) => user.isAuth);
  const [userLocation, setUserLocation] = useState(null);
  const [reports, setReports] = useState([]);
  const mapRef = useRef(null);

  const queryByAddress = async values => {
    setisLoading(true);

    const {province, district, street, neighborhood} = values;
    const address =
      street + ',' + neighborhood + ',' + district + ',' + province;
    const GeoFirestore = geofirestore.initializeApp(firestore());

    try {
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        address,
      )}&format=json&addressdetails=1`;

      const response = await axios.get(url);
      const {lat, lon} = response.data[0];

      const query = GeoFirestore.collection('havoc_reports').near({
        center: new firestore.GeoPoint(parseFloat(lat), parseFloat(lon)),
        radius: 1,
      });

      const results = await query.get();
      const reports = results.docs.map(doc => doc.data());
      setReports(reports);

      mapRef?.current.animateToRegion(
        {
          latitude: parseFloat(lat),
          longitude: parseFloat(lon),
          latitudeDelta: 0.0015,
          longitudeDelta: 0.0015,
        },
        1000,
      );
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  const queryByLocation = async () => {
    setisLoading(true);
    const GeoFirestore = geofirestore.initializeApp(firestore());
    try {
      const coords = await getLocation();
      const {latitude, longitude} = coords.coords;

      const query = GeoFirestore.collection('havoc_reports').near({
        center: new firestore.GeoPoint(latitude, longitude),
        radius: 0.5,
      });

      const results = await query.get();
      const reports = results.docs.map(doc => doc.data());
      setReports(reports);

      mapRef.current.animateToRegion(
        {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        },
        1000,
      );
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  const openMakeReportDialog = async () => {
    // if (!isAuth) {
    //   return Toast.show({
    //     type: 'error',
    //     position: 'top',
    //     text1: 'Hata',
    //     text2: 'Lütfen giriş yapınız.',
    //   });
    // }

    setisLoading(true);
    try {
      setReports([]);

      const coords = await getLocation();
      const {latitude, longitude} = coords.coords;

      mapRef.current.animateToRegion(
        {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        },
        1000,
      );

      const res = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`,
      );

      // console.log(res.data.address.amenity);

      setUserLocation({
        latitude,
        longitude,
        address: res.data.address.amenity,
      });

      setisLoading(false);
      setvisibleDialog(true);
    } catch (error) {
      console.log(error);
    }
  };

  const reportByLocation = async () => {
    setisLoading(true);

    const GeoFirestore = geofirestore.initializeApp(firestore());
    const geocollection = GeoFirestore.collection('havoc_reports');

    try {
      const coords = await getLocation();
      const {latitude, longitude} = coords.coords;

      const coordinates = new firestore.GeoPoint(latitude, longitude);

      const doc = await geocollection.add({
        coordinates,
        timestamp: firestore.FieldValue.serverTimestamp(),
      });

      console.log('Rapor başarıyla kaydedildi!');

      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'İşlem Başarılı',
        text2: 'Raporunuz kaydedildi.',
      });

      setvisibleDialog(false);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  const hideDialog = () => {
    setvisibleDialog(false);
  };

  return (
    <Provider>
      <View style={styles.container}>
        <View
          style={{
            display: 'flex',
            width: '100%',
            marginBottom: '2%',
          }}>
          <Button
            mode="contained"
            onPress={openMakeReportDialog}
            loading={isLoading}
            disabled={isLoading}
            buttonColor="red">
            Konuma Göre Rapor Et
          </Button>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <MapView
            ref={mapRef}
            style={{
              flex: 1,
              width: '100%',
            }}
            region={region}>
            {userLocation ? (
              <Marker
                title="Konumun"
                titleVisibility="adaptive"
                coordinate={userLocation}
                pinColor="cyan"></Marker>
            ) : null}

            {reports?.map((report, index) => {
              const {latitude, longitude} = report.coordinates;

              return (
                <Marker
                  key={index}
                  title={'report' + index}
                  pinColor="red"
                  titleVisibility="adaptive"
                  coordinate={{latitude, longitude}}
                  // onPress={() => console.log('first')}
                />
              );
            })}
          </MapView>
        </View>

        <View
          style={{
            flex: 0.1,
            paddingVertical: 10,
          }}>
          <Button
            mode="contained"
            onPress={queryByLocation}
            loading={isLoading}
            disabled={isLoading}
            buttonColor="red">
            Konuma Göre Sorgula
          </Button>
        </View>
        <View
          style={{
            flex: 0.7,
            justifyContent: 'center',
            width: '100%',
          }}>
          <ScrollView>
            <Card
              style={{width: '100%', height: '100%', paddingVertical: 'auto'}}>
              <Formik
                onSubmit={queryByAddress}
                initialValues={{
                  province: '',
                  district: '',
                  street: '',
                  neighborhood: '',
                }}
                validationSchema={validationSchema}>
                {({
                  handleChange,
                  handleSubmit,
                  handleBlur,
                  values,
                  errors,
                  touched,
                }) => (
                  <>
                    <Card.Content>
                      <TextInput
                        mode="outlined"
                        label="İl *"
                        activeOutlineColor="red"
                        value={values.province}
                        onChangeText={handleChange('province')}
                        onBlur={handleBlur('province')}
                        error={
                          touched.province && errors.province ? true : false
                        }
                      />

                      <TextInput
                        mode="outlined"
                        label="İlçe *"
                        activeOutlineColor="red"
                        value={values.district}
                        onChangeText={handleChange('district')}
                        onBlur={handleBlur('district')}
                        error={
                          touched.district && errors.district ? true : false
                        }
                      />
                      <TextInput
                        mode="outlined"
                        label="Mahalle"
                        activeOutlineColor="red"
                        value={values.neighborhood}
                        onChangeText={handleChange('neighborhood')}
                        onBlur={handleBlur('neighborhood')}
                        error={
                          touched.neighborhood && errors.neighborhood
                            ? true
                            : false
                        }
                      />
                      <TextInput
                        mode="outlined"
                        label="Sokak"
                        activeOutlineColor="red"
                        value={values.street}
                        onChangeText={handleChange('street')}
                        onBlur={handleBlur('street')}
                        error={touched.street && errors.street ? true : false}
                      />
                      <Text>*Verilerin doğruluğu kesin olmayabilir</Text>
                    </Card.Content>
                    <Card.Actions style={{alignSelf: 'center'}}>
                      <Button
                        mode="contained"
                        onPress={handleSubmit}
                        loading={isLoading}
                        disabled={isLoading}
                        buttonColor="red">
                        Manuel Sorgula
                      </Button>
                    </Card.Actions>
                  </>
                )}
              </Formik>
            </Card>
          </ScrollView>
        </View>
      </View>
      <Portal>
        <Dialog visible={visibleDialog} onDismiss={hideDialog}>
          <>
            <Dialog.Title>Dikkat</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                Tespit edilen konum bilgilerinin doğruluğunu kontrol ediniz.
              </Paragraph>
              <Paragraph>Konum Bilgisi: {userLocation?.address}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>İptal</Button>
              <Button
                loading={isLoading}
                mode="contained"
                onPress={reportByLocation}>
                Rapor Et
              </Button>
            </Dialog.Actions>
          </>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export default Query_Build;
