import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import { Text, Button, Card, Paragraph } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const Missing_Declaration_Card = ({ props }) => {

    const navigation = useNavigation();

    const user = auth().currentUser;

    const item = props;
    console.log(props)
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleDelete = async () => {
        try {
            await firestore().collection('missing_people').doc(item.id).delete();
            return navigation.navigate('MissingDeclarations_Screen')
        } catch (error) {
            console.error('Silme işlemi sırasında hata oluştu:', error);
        }
    };
    // console.log(selectedImage);
    const handleImagePress = () => {
        setSelectedImage(item.photo);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedImage(null);
    };

    const goTo = () => {
        navigation.navigate('DeclarationDetailsScreen', { item: item });
    };

    return (
        <Card style={{ margin: '2%', backgroundColor: '#FF5300' }}>
            <Card.Title titleStyle={{ color: 'white' }} title="Kayıp İlanı" />
            <Card.Content >
                <Text style={{ color: 'white' }} variant="titleMedium"> {item.name}</Text>
                <Text variant="titleSmall" style={{ color: 'white' }}> {item.contact1}</Text>
            </Card.Content>
            <TouchableOpacity onPress={handleImagePress}>
                <Card.Cover style={{ width: 150, height: 150, alignSelf: 'center', borderRadius: 10 }} source={{ uri: item.photo }} />
            </TouchableOpacity>
            <Card.Actions style={{ margin: '1%' }}>
                {user?.uid === item.owner ? (
                    <Button mode="elevated"
                        onPress={() => setShowModal(true)}
                    >İlanı Sil</Button>
                ) : null}
                <Button mode="contained" onPress={goTo}>Detayları Gör</Button>
            </Card.Actions>
            <Modal
                visible={modalVisible}
                transparent={true}
                onRequestClose={closeModal}
            >
                <View style={{ flex: 1, padding: '2%', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <Card>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Actions>
                            <Button mode="contained" onPress={closeModal}><Text style={{ color: 'white' }} variant="bodySmall">Kapat</Text></Button>
                        </Card.Actions>
                    </Card>
                </View>
            </Modal>
            <Modal
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <View style={modalStyles.modalBackground}>
                    <View style={modalStyles.modalContainer}>
                        <Text>Bu ilanı silmek istediğinizden emin misiniz?</Text>
                        <Button onPress={handleDelete} mode="contained" buttonColor="red">
                            Evet, Sil
                        </Button>
                        <Button onPress={() => setShowModal(false)} mode="outlined">
                            İptal
                        </Button>
                    </View>
                </View>
            </Modal>
        </Card>
    );
};

const modalStyles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
});

export default Missing_Declaration_Card;
