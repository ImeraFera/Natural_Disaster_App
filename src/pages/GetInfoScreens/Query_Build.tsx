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

const Query_Build = () => {
  const [isLoading, setisLoading] = useState(false);
  const [visibleDialog, setvisibleDialog] = useState(false);
  const [userLocation, setuserLocation] = useState(null);

  const hideDialog = () => {
    setvisibleDialog(false);
  };

  const [region, setRegion] = useState({
    latitude: 41.0082,
    longitude: 28.9784,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const mapRef = useRef(null);

  const findLocation = () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          const coords = position.coords;
          resolve(coords);
        },
        error => {
          console.error(error);
          reject(error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    });
  };

  const getCoordinates = async ({province, district, street, neighborhood}) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${province}&format=json`,
      );

      console.log('response ', response);

      if (response.data.length > 0) {
        const {lat, lon} = response.data[0];
        const updatedRegion = {
          latitude: parseFloat(lat),
          longitude: parseFloat(lon),
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        };

        setRegion(updatedRegion);

        if (mapRef.current) {
          mapRef.current.animateToRegion(updatedRegion, 1000);
        }
      } else {
        console.log('Konum bilgisi bulunamadı.');
      }
    } catch (error) {
      console.error('API isteği başarısız oldu:', error);
    }
  };

  const handleClickSubmit = async values => {
    console.log(values);
    await getCoordinates(values);
    // console.log(region);
  };

  const makeReport = async () => {
    try {
      setisLoading(true);

      setvisibleDialog(false);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  const handleClickReportByLocationModal = async () => {
    try {
      setisLoading(true);
      const coords = await findLocation();

      const response = await axios.get(
        `https://geocode.maps.co/reverse?lat=${coords.latitude}&lon=${coords.longitude}&api_key=${geocodeApiKey}`,
      );
      console.log(response.data);
      if (response.data) {
        const address = response.data.display_name;

        console.log('Detaylı Adres:', address);

        if (mapRef.current) {
          mapRef.current.animateToRegion(
            {
              latitude: coords.latitude,
              longitude: coords.longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            },
            1000,
          );
        }

        setuserLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
          address: address,
        });
        setvisibleDialog(true);
      } else {
        console.log('Detaylı adres bilgisi bulunamadı.');
      }
    } catch (error) {
      console.error('Hata:', error);
    } finally {
      setisLoading(false);
    }
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
            onPress={handleClickReportByLocationModal}
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
            initialRegion={region}
            region={region}>
            {userLocation && (
              <Marker
                pinColor={'cyan'}
                coordinate={userLocation}
                title="Senin Konumun"
              />
            )}
          </MapView>
        </View>

        <View
          style={{
            flex: 0.1,
            paddingVertical: 10,
          }}>
          <Button
            mode="contained"
            onPress={findLocation}
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
                onSubmit={handleClickSubmit}
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
          <Dialog.Title>Onay</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              Tespit edilen konum bilgilerinin doğruluğunu kontrol ediniz.
            </Paragraph>
            <Paragraph>Konum Bilgisi: {userLocation?.address}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>İptal</Button>
            <Button mode="contained" onPress={makeReport}>
              Rapor Et
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export default Query_Build;
