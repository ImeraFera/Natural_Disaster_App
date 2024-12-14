import {View, ScrollView, TouchableOpacity, Modal, Linking} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  Button,
  Card,
  Portal,
  Dialog,
  PaperProvider,
} from 'react-native-paper';
const Help_Details = () => {
  const navigation = useNavigation();
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCallUser = () => {
    Linking.openURL('tel:112');
  };

  return (
    <PaperProvider>
      <View
        style={{
          display: 'flex',
        }}>
        <ScrollView>
          <Card
            style={{
              display: 'flex',
              width: '95%',
              alignSelf: 'center',
              marginVertical: '2%',
            }}>
            <Card.Title
              title="Yardım Detayları"
              titleVariant="titleLarge"
              titleStyle={{
                textAlign: 'center',
              }}
            />
            <Card.Content>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text variant="titleMedium">Ahmet Furkan Sayan</Text>
                <Text variant="bodyLarge">12/5/2003</Text>
              </View>
              <Text variant="bodyLarge">5453321212</Text>
              <Text variant="bodyLarge">5453321212</Text>
              <Text variant="bodyLarge">5453321212</Text>
              <Text variant="bodyLarge">5453321212</Text>
              <Text variant="bodyLarge">5453321212</Text>
              <Text variant="bodyLarge">5453321212</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.goBack()}>İptal</Button>
              <Button onPress={handleCallUser}>Telefon Et</Button>
            </Card.Actions>
          </Card>
        </ScrollView>
        <Portal>
          <Dialog visible={openDialog} onDismiss={handleCloseDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={handleCloseDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

export default Help_Details;
