import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Card, Text} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import {getAllHavocReports} from '../redux/slices/userSlice';

const Report_Card = ({report}) => {
  const {isConfirmed, username, timestamp, photoUrl, coordinates, id} = report;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const confirmReport = async () => {
    setIsLoading(true);
    try {
      const docRef = firestore().collection('havoc_reports').doc(id);

      await docRef.update({
        isConfirmed: true,
      });

      await dispatch(getAllHavocReports()).unwrap();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const denyReport = async () => {
    setIsLoading(true);
    try {
      await firestore().collection('havoc_reports').doc(id).delete();
      await dispatch(getAllHavocReports()).unwrap();
      console.log(`Document with ID: ${id} has been deleted.`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteReport = async () => {
    try {
      console.log('silindi');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      style={{
        margin: '2%',
      }}>
      <Card.Content>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '2%',
          }}>
          <Text variant="titleLarge">{username}</Text>
          <Text variant="bodyMedium">{timestamp.split(',')[0]}</Text>
        </View>
      </Card.Content>
      <Card.Cover
        style={{
          padding: '2%',
        }}
        source={{uri: photoUrl}}
      />

      <Card.Content>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '2%',
          }}>
          <Text variant="bodyMedium">
            {coordinates.latitude + ' - ' + coordinates.longitude}
          </Text>
        </View>
      </Card.Content>
      <Card.Actions>
        {!isConfirmed ? (
          <>
            <Button
              loading={isLoading}
              disabled={isLoading}
              mode="outlined"
              onPress={denyReport}>
              Reddet
            </Button>
            <Button
              loading={isLoading}
              disabled={isLoading}
              mode="contained"
              onPress={confirmReport}>
              Onayla
            </Button>
          </>
        ) : (
          <>
            <Button
              loading={isLoading}
              disabled={isLoading}
              mode="outlined"
              onPress={deleteReport}>
              Sil
            </Button>
            {/* <Button mode="contained" onPress={confirmReport}></Button> */}
          </>
        )}
      </Card.Actions>
    </Card>
  );
};

export default Report_Card;
