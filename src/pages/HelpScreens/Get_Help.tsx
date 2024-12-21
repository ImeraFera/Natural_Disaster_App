import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import {TextInput, Text, Checkbox, Button} from 'react-native-paper';
import styles from '../../styles/GetHelp';
import {Formik} from 'formik';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {createHelpForm} from '../../redux/slices/userSlice';

const Get_Help = () => {
  const isAuth = useSelector(({user}) => user.isAuth);
  const navigation = useNavigation();
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  if (!isAuth) {
    navigation.goBack();

    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'Hata',
      text2: 'Lütfen giriş yapınız.',
    });

    return;
  }

  const handleGetHelpFormSubmit = async (values, {resetForm}) => {
    setIsLoading(true);
    try {
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'İşlem Başarılı',
        text2: 'Talebiniz başarıyla gönderildi.',
      });
      console.log('get help values', values);
      await dispatch(createHelpForm(values)).unwrap();
      resetForm();
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'İşlem Başarısız',
        text2: error.message,
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yardım Talep Etme Formu</Text>
      <View style={styles.container2}>
        <Formik
          initialValues={{
            disasterType: '',
            disasterDate: new Date(),
            statusDefinition: '',
            damageStatus: 'low',
            tel: '',
            address: '',
            additionalInfo: '',
          }}
          // validationSchema={validationSchema}
          onSubmit={handleGetHelpFormSubmit}>
          {({
            handleChange,
            handleSubmit,
            values,
            setFieldValue,
            errors,
            touched,
          }) => (
            <>
              <ScrollView style={styles.container_form}>
                <View style={styles.form_elements}>
                  <Text variant="labelLarge">Afet Türü</Text>
                  <Picker
                    style={styles.picker}
                    selectedValue={values.disasterType}
                    onValueChange={itemValue =>
                      setFieldValue('disasterType', itemValue)
                    }>
                    <Picker.Item label="Lütfen Afet Türünü Seçiniz" value="" />
                    <Picker.Item label="Deprem" value="Deprem" />
                    <Picker.Item label="Sel" value="Sel" />
                    <Picker.Item label="Heyelan" value="Heyelan" />
                    <Picker.Item label="Çığ" value="Çığ" />
                    <Picker.Item label="Yangın" value="Yangın" />
                    <Picker.Item label="Diğer" value="Diğer" />
                  </Picker>
                  {errors.disasterType && touched.disasterType && (
                    <Text style={{color: 'red'}}>{errors.disasterType}</Text>
                  )}
                </View>

                <View style={styles.form_elements}>
                  <Text variant="labelLarge">Afet Tarihi:</Text>
                  <TextInput
                    mode="flat"
                    style={{backgroundColor: '#D9D9D9'}}
                    value={values.disasterDate.toISOString().split('T')[0]}
                    activeUnderlineColor="red"
                    right={
                      <TextInput.Icon
                        onPress={() => setOpenDatePicker(true)}
                        icon="calendar"
                      />
                    }
                  />
                  <DatePicker
                    modal
                    open={openDatePicker}
                    date={values.disasterDate}
                    mode="date"
                    onConfirm={newDate => {
                      setFieldValue('disasterDate', newDate);
                      setOpenDatePicker(false);
                    }}
                    onCancel={() => setOpenDatePicker(false)}
                  />

                  {errors.disasterDate && touched.disasterDate && (
                    <Text style={{color: 'red'}}>{errors.disasterDate}</Text>
                  )}
                </View>

                <View style={styles.form_elements}>
                  <TextInput
                    style={{backgroundColor: '#D9D9D9'}}
                    activeUnderlineColor="red"
                    mode="flat"
                    label="Durum Tanımı"
                    numberOfLines={5}
                    value={values.statusDefinition}
                    onChangeText={handleChange('statusDefinition')}
                  />
                  {errors.statusDefinition && touched.statusDefinition && (
                    <Text style={{color: 'red'}}>
                      {errors.statusDefinition}
                    </Text>
                  )}
                </View>

                <View style={styles.form_elements}>
                  <Text variant="labelLarge">Hasar Durumu:</Text>
                  <Picker
                    style={styles.picker}
                    selectedValue={values.damageStatus}
                    onValueChange={itemValue =>
                      setFieldValue('damageStatus', itemValue)
                    }>
                    <Picker.Item label="Az" value="Az" />
                    <Picker.Item label="Orta" value="Orta" />
                    <Picker.Item label="Ağır" value="Ağır" />
                  </Picker>
                </View>

                <View style={styles.form_elements}>
                  <TextInput
                    style={{backgroundColor: '#D9D9D9'}}
                    activeUnderlineColor="red"
                    mode="flat"
                    label="Telefon Numarası"
                    inputMode="decimal"
                    maxLength={10}
                    value={values.tel}
                    onChangeText={handleChange('tel')}
                  />
                  {errors.tel && touched.tel && (
                    <Text style={{color: 'red'}}>{errors.tel}</Text>
                  )}
                </View>

                <View style={styles.form_elements}>
                  <TextInput
                    style={{backgroundColor: '#D9D9D9'}}
                    activeUnderlineColor="red"
                    mode="flat"
                    label="Adres"
                    numberOfLines={5}
                    value={values.address}
                    onChangeText={handleChange('address')}
                  />
                  {errors.address && touched.address && (
                    <Text style={{color: 'red'}}>{errors.address}</Text>
                  )}
                </View>

                <View style={styles.form_elements}>
                  <TextInput
                    style={{backgroundColor: '#D9D9D9'}}
                    activeUnderlineColor="red"
                    mode="flat"
                    label="Ek Bilgiler"
                    numberOfLines={5}
                    value={values.additionalInfo}
                    onChangeText={handleChange('additionalInfo')}
                  />
                </View>

                <View style={styles.button}>
                  <Button
                    mode="contained"
                    buttonColor="#E30014"
                    loading={isLoading}
                    disabled={isLoading}
                    onPress={handleSubmit}>
                    GÖNDER
                  </Button>
                </View>
              </ScrollView>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Get_Help;
