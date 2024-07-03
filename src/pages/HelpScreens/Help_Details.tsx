import { View, ScrollView, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import styles from '../../styles/GiveHelpForm';
import { useNavigation } from '@react-navigation/native';
import { Text, Button } from 'react-native-paper';
const Give_Help_Form = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {

        setModalVisible(false);
    };

    const navigation = useNavigation();

    const goToDetails = () => {
        navigation.navigate('GiveHelpFormScreen');
        closeModal();
    };
    return (
        <View style={styles.container}>
            <ScrollView style={styles.form_container}>
                <View style={styles.card_container}>
                    <View style={styles.card_header}>
                        <Text style={styles.card_title}>
                            Yardım Detayları
                        </Text>
                    </View>
                    <View style={styles.card_body}>
                        <View style={styles.card_row}>
                            <Text style={styles.card_desc_title} variant="titleMedium">Ad</Text>
                            <Text style={styles.card_desc}>
                                Ahmet Furkan
                            </Text>
                        </View>
                        <View style={styles.card_row}>
                            <Text style={styles.card_desc_title} variant="titleMedium">Soyad</Text>

                            <Text style={styles.card_desc}>
                                Sayan
                            </Text>
                        </View>

                        <View style={styles.card_row}>
                            <Text style={styles.card_desc_title} variant="titleMedium">İl / İlçe</Text>
                            <Text style={styles.card_desc}>
                                İstanbul-Pendik
                            </Text>
                        </View>
                        <View style={styles.card_row}>
                            <Text style={styles.card_desc_title} variant="titleMedium">Telefon</Text>
                            <Text style={styles.card_desc}>
                                1155447788
                            </Text>
                        </View>
                        <View style={styles.card_row}>
                            <Text style={styles.card_desc_title} variant="titleMedium">Afet Türü</Text>

                            <Text style={styles.card_desc}>
                                Deprem
                            </Text>
                        </View>
                        <View style={styles.card_row}>
                            <Text style={styles.card_desc_title} variant="titleMedium">Afet Tarihi</Text>

                            <Text style={styles.card_desc}>
                                12.04.2022
                            </Text>
                        </View>
                        <View style={styles.card_row}>
                            <Text style={styles.card_desc_title} variant="titleMedium">Yardım Türü</Text>

                            <Text style={styles.card_desc}>
                                Gıda
                            </Text>
                        </View>
                        <View style={styles.card_row}>
                            <Text style={styles.card_desc_title} variant="titleMedium">Hasar Durumu</Text>

                            <Text style={styles.card_desc}>
                                Orta
                            </Text>
                        </View>
                        <View style={styles.card_row}>
                            <Text style={styles.card_desc_title} variant="titleMedium">Daha Önce Yardım Aldı Mı?</Text>
                            <Text style={styles.card_desc}>
                                Hayır
                            </Text>
                        </View>
                        <View style={styles.card_row}>
                            <Text style={styles.card_desc_title} variant="titleMedium">Durum Tanımı</Text>

                            <Text style={styles.card_desc}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, vitae cupiditate dolor, sequi reiciendis corrupti temporibus aut aspernatur iure dolores expedita dignissimos. Consequatur laudantium quae mollitia assumenda sint nobis recusandae!
                            </Text>
                        </View>

                        <View style={styles.card_row}>
                            <Text style={styles.card_desc_title} variant="titleMedium">Ek Bilgiler</Text>
                            <Text style={styles.card_desc}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quo inventore impedit consequatur, error nam quam voluptates ea sunt earum perferendis, aliquid laboriosam fuga nostrum. Modi magnam illum velit natus.
                            </Text>
                        </View>
                        <View style={styles.card_row}>
                            <Text style={styles.card_desc_title} variant="titleMedium">Adres</Text>

                            <Text style={styles.card_desc}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quo inventore impedit consequatur, error nam quam voluptates ea sunt earum perferendis, aliquid laboriosam fuga nostrum. Modi magnam illum velit natus.
                            </Text>
                        </View>

                        <View style={styles.card_row}>
                            <Button style={{ flex: 1, marginVertical: '3%' }} labelStyle={{ fontSize: 20 }} mode="contained" onPress={openModal}>
                                Yardım Edeceğim
                            </Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modal_container}>
                    <View style={styles.modal_container2}>
                        <View style={styles.modal_header}>
                            <Text style={{ fontSize: 18, color: 'red', fontWeight: '500', textAlign: 'center', textAlignVertical: 'center' }}>
                                Yardım etmek istediğinize emin misiniz ? Bu işlem geri alınamaz ve karşı tarafa yardım isteğiniz ile ilgili bildirim gidecektir.
                            </Text>
                        </View>
                        <View style={styles.modal_body}>
                            <Button onPress={closeModal} labelStyle={{ fontSize: 20 }} style={{ flex: 0.4 }} mode='contained' buttonColor='red'>
                                Hayır
                            </Button>
                            <Button onPress={goToDetails} labelStyle={{ fontSize: 20, }} style={{ flex: 0.4 }} mode='contained' buttonColor='green'>
                                Evet
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </View >
    );
};

export default Give_Help_Form;
