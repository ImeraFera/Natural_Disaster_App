import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Button, Card, Dialog, Portal, Provider} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {deleteMissingForm} from '../redux/slices/userSlice';
import {getMissingForms} from '../redux/slices/appSlice';

const Missing_Declaration_Card = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const uid = useSelector(({user}) => user.uid);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(item);
  const handleDelete = async () => {
    setIsLoading(true);
    await dispatch(deleteMissingForm(item.id)).unwrap();
    setIsLoading(false);
    setShowDeleteDialog(false);
    setIsLoading(true);
    await dispatch(getMissingForms()).unwrap();
    setIsLoading(false);
  };

  const handleImagePress = () => {
    setSelectedImage(item.photo);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <Card style={{margin: '2%', backgroundColor: '#FF5300'}}>
      <Card.Title titleStyle={{color: 'white'}} title="Kayıp İlanı" />
      <Card.Content>
        <Text style={{color: 'white'}} variant="titleMedium">
          {' '}
          {item.name}
        </Text>
        <Text variant="titleSmall" style={{color: 'white'}}>
          {' '}
          {item.contact1}
        </Text>
      </Card.Content>
      <TouchableOpacity onPress={handleImagePress}>
        <Card.Cover
          style={{
            width: 150,
            height: 150,
            alignSelf: 'center',
            borderRadius: 10,
          }}
          source={{uri: item.imageUrl}}
        />
      </TouchableOpacity>
      <Card.Actions style={{margin: '1%'}}>
        {uid === item.user.uid ? (
          <Button mode="elevated" onPress={() => setShowDeleteDialog(true)}>
            İlanı Sil
          </Button>
        ) : null}
        <Button
          mode="contained"
          onPress={() =>
            navigation.navigate('DeclarationDetailsScreen', {item: item})
          }>
          Detayları Gör
        </Button>
      </Card.Actions>

      {/* Image Modal */}
      <Portal>
        <Dialog visible={modalVisible} onDismiss={closeModal}>
          <Dialog.Content>
            <Card.Cover source={{uri: item.imageUrl}} />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={closeModal}>Kapat</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      {/* Delete Confirmation Dialog */}
      <Portal>
        <Dialog
          visible={showDeleteDialog}
          onDismiss={() => setShowDeleteDialog(false)}>
          <Dialog.Title>İlanı Silmek İstediğinizden Emin Misiniz?</Dialog.Title>
          <Dialog.Content>
            <Text>
              Bu ilanı silmek, geri alınamaz. Lütfen dikkatlice onaylayın.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              mode="contained"
              disabled={isLoading}
              loading={isLoading}
              onPress={handleDelete}>
              Onaylıyorum
            </Button>
            <Button
              style={{
                margin: 'auto',
              }}
              onPress={() => setShowDeleteDialog(false)}>
              İptal
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Card>
  );
};

export default Missing_Declaration_Card;
