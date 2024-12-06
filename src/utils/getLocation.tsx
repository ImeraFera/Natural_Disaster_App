import Geolocation from '@react-native-community/geolocation';

export const getLocation = () =>
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });
