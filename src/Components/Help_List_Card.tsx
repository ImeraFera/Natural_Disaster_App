import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/Help_List_Card';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Button, Card, IconButton} from 'react-native-paper';
const Help_List_Card = ({item}) => {
  const navigation = useNavigation();
  console.log(item);

  return (
    <Card style={styles.container}>
      <Card.Title
        subtitleStyle={styles.card_subtitle}
        titleStyle={styles.card_title}
        style={styles.card}
        titleNumberOfLines={2}
        title={'Ad-Soyad: ' + item.user.name + ' ' + item.user.lastName}
        subtitle={
          'Tarih: ' +
          new Date(item.disasterDate.seconds * 1000).toLocaleDateString()
        }
      />
      <Card.Title
        titleNumberOfLines={1}
        subtitleStyle={{fontSize: 20}}
        titleStyle={{fontSize: 20}}
        title={'Hasar Durumu: ' + item.damageStatus}
        subtitle={'Afet Türü: ' + item.disasterType}
      />
      <Card.Actions>
        <Button
          onPress={() => navigation.navigate('HelpDetailsScreen', item)}
          labelStyle={styles.button_label}
          style={styles.button}
          mode="contained">
          Detayları Göster
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default Help_List_Card;
