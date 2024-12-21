import {Platform, PermissionsAndroid} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Declaration_Details_Card';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, Button, Card, Divider, Portal, Dialog} from 'react-native-paper';
import {Linking} from 'react-native';

const Declaration_Details_Card = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {item} = route.params;

  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleCall = async () => {
    const phoneNumber = item.contact1;
    const phoneUrl = `tel:${phoneNumber}`;

    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CALL_PHONE,
          {
            title: 'Phone Call Permission',
            message: 'This app needs access to your phone calls',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Linking.openURL(phoneUrl);
        } else {
          console.log('Call Phone permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      Linking.openURL(phoneUrl).catch(err =>
        console.error('An error occurred', err),
      );
    }
  };

  return (
    <Card style={styles.container}>
      <Card.Cover source={{uri: item.imageUrl}} />
      <Card.Title
        titleVariant="headlineSmall"
        titleStyle={{fontWeight: 'bold', textAlign: 'center'}}
        title={item.name}
      />
      <Card.Content>
        <Text variant="titleLarge">
          Cinsiyet:{' '}
          <Text style={{fontWeight: 'bold'}}>
            {item.gender == 'Man' ? 'Erkek' : 'Kadın'}
          </Text>
        </Text>
        <Divider />
        <Text variant="titleLarge">
          Yaş: <Text style={{fontWeight: 'bold'}}>{item.age}</Text>
        </Text>
        <Divider />

        <Text variant="titleLarge">
          Son Görülme Yeri:{' '}
          <Text style={{fontWeight: 'bold'}}>{item.lastPlace}</Text>
        </Text>
        <Divider />

        <Text variant="titleLarge">
          Detaylar: <Text style={{fontWeight: 'bold'}}>{item.details}</Text>
        </Text>
        <Divider />
        <Text variant="titleLarge">
          Kaybolma Tarihi: <Text style={{fontWeight: 'bold'}}>{item.date}</Text>
        </Text>

        <Divider />

        <Text variant="titleLarge">
          İletişim: <Text style={{fontWeight: 'bold'}}>{item.contact1}</Text>
        </Text>
        <Divider />

        <Text variant="titleLarge">
          Ödül:{' '}
          <Text style={{fontWeight: 'bold'}}>
            {item.prize ? item.prize + ' TL' : 'Yok'}
          </Text>
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button
          labelStyle={{fontSize: 16}}
          style={{marginRight: 'auto'}}
          onPress={() => navigation.goBack()}>
          Geri Git
        </Button>
        <Button
          labelStyle={{fontSize: 16}}
          style={{marginLeft: 'auto'}}
          onPress={showDialog}>
          Gördüm, Haber Ver!
        </Button>
      </Card.Actions>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Gördüğünüze Emin Misiniz?</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyLarge">
              Eğer eminseniz kayıp ilanı veren kişiyle görüşmeniz rica olunur.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              mode="outlined"
              onPress={hideDialog}
              style={{marginRight: 'auto'}}>
              Emin Değilim
            </Button>
            <Button
              mode="contained"
              onPress={handleCall}
              style={{marginLeft: 'auto'}}>
              Eminim
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Card>
  );
};

export default Declaration_Details_Card;
