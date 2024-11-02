import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import {TextInput, Text, Checkbox, Button, Switch} from 'react-native-paper';
import styles from '../../styles/GetHelp';
import {Formik} from 'formik';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {useSelector} from 'react-redux';

const DeclarationSchema = Yup.object().shape({
  name: Yup.string().required('Bu alan zorunludur'),
  gender: Yup.string().required('Bu alan zorunludur'),
  age: Yup.string().required('Bu alan zorunludur'),
  lastPlace: Yup.string().required('Bu alan zorunludur'),
  date: Yup.string().required('Bu alan zorunludur'),
  details: Yup.string().required('Bu alan zorunludur'),
  contact1: Yup.string().required('Bu alan zorunludur'),
  contact2: Yup.string()
    .email('Geçersiz email adresi')
    .required('Bu alan zorunludur'),
  address: Yup.string().required('Bu alan zorunludur'),
  prize: Yup.string(),
});

const Declaration_Settings = () => {
  const isAuth = useSelector(({user}) => user.isAuth);

  console.log(isAuth);
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
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
  const handlePost = async values => {
    const {
      name,
      gender,
      age,
      lastPlace,
      date,
      details,
      contact1,
      contact2,
      address,
      prize,
    } = values;
    const userId = auth().currentUser?.uid;
    try {
      await firestore().collection('missing_people').add({
        name,
        gender,
        age,
        lastPlace,
        date,
        details,
        contact1,
        contact2,
        address,
        prize,
        owner: userId,
      });

      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'İşlem Başarılı',
        text2: 'Kayıp ilanınız eklendi.',
      });

      navigation.navigate('Home_Screen');
    } catch (error) {
      console.error('İlan kaydedilirken bir hata oluştu:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Kayıp İlanı Formu</Text>
      <View style={styles.container2}>
        <ScrollView style={styles.container_form}>
          <Formik
            initialValues={{
              name: '',
              gender: '',
              age: '',
              lastPlace: '',
              date: '',
              details: '',
              contact1: '',
              contact2: '',
              address: '',
              prize: '',
            }}
            validationSchema={DeclarationSchema}
            onSubmit={handlePost}>
            {({
              handleChange,
              handleSubmit,
              values,
              setFieldValue,
              errors,
              touched,
            }) => (
              <>
                <TextInput
                  mode="outlined"
                  activeOutlineColor="red"
                  label="Kayıp Kişinin Adı-Soyadı"
                  numberOfLines={1}
                  value={values.name}
                  onChangeText={handleChange('name')}
                />
                {touched.name && errors.name && (
                  <Text style={{color: 'red'}}>{errors.name}</Text>
                )}
                <Picker
                  style={styles.picker}
                  selectedValue={values.gender}
                  onValueChange={itemValue =>
                    setFieldValue('gender', itemValue)
                  }>
                  <Picker.Item label="Kayıp Kişinin Cinsiyeti" value="" />
                  <Picker.Item label="Kadın" value="Woman" />
                  <Picker.Item label="Erkek" value="Man" />
                </Picker>
                {touched.gender && errors.gender && (
                  <Text style={{color: 'red'}}>{errors.gender}</Text>
                )}
                <TextInput
                  activeOutlineColor="red"
                  mode="outlined"
                  label="Kayıp Kişinin Yaşı"
                  numberOfLines={1}
                  value={values.age}
                  inputMode="numeric"
                  onChangeText={handleChange('age')}
                />
                {touched.age && errors.age && (
                  <Text style={{color: 'red'}}>{errors.age}</Text>
                )}
                <TextInput
                  activeOutlineColor="red"
                  mode="outlined"
                  label="Son Görüldüğü Yer"
                  numberOfLines={1}
                  style={{marginBottom: '2%'}}
                  value={values.lastPlace}
                  onChangeText={handleChange('lastPlace')}
                />
                {touched.lastPlace && errors.lastPlace && (
                  <Text style={{color: 'red'}}>{errors.lastPlace}</Text>
                )}
                <TextInput
                  activeOutlineColor="red"
                  mode="outlined"
                  value={values.date}
                  right={
                    <TextInput.Icon
                      onPress={() => setOpen(true)}
                      icon="calendar"
                    />
                  }
                  onPressIn={() => setOpen(true)}
                />
                <DatePicker
                  modal
                  open={open}
                  date={new Date(values.date || new Date())}
                  maximumDate={new Date()}
                  mode="date"
                  onConfirm={newDate => {
                    setOpen(false);
                    setFieldValue('date', newDate.toISOString().split('T')[0]);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
                {touched.date && errors.date && (
                  <Text style={{color: 'red'}}>{errors.date}</Text>
                )}
                <TextInput
                  activeOutlineColor="red"
                  mode="outlined"
                  label="Kayıp Kişinin Giydiği Kıyafetler vb."
                  numberOfLines={5}
                  value={values.details}
                  onChangeText={handleChange('details')}
                />
                {touched.details && errors.details && (
                  <Text style={{color: 'red'}}>{errors.details}</Text>
                )}
                <TextInput
                  activeOutlineColor="red"
                  mode="outlined"
                  label="Telefon Numaranızı Giriniz"
                  numberOfLines={1}
                  inputMode="numeric"
                  value={values.contact1}
                  onChangeText={handleChange('contact1')}
                />
                {touched.contact1 && errors.contact1 && (
                  <Text style={{color: 'red'}}>{errors.contact1}</Text>
                )}
                <TextInput
                  activeOutlineColor="red"
                  mode="outlined"
                  label="Email Adresinizi Giriniz"
                  numberOfLines={1}
                  value={values.contact2}
                  onChangeText={handleChange('contact2')}
                />
                {touched.contact2 && errors.contact2 && (
                  <Text style={{color: 'red'}}>{errors.contact2}</Text>
                )}
                <TextInput
                  activeOutlineColor="red"
                  mode="outlined"
                  label="Ev Adresinizi Giriniz"
                  numberOfLines={5}
                  value={values.address}
                  onChangeText={handleChange('address')}
                />
                {touched.address && errors.address && (
                  <Text style={{color: 'red'}}>{errors.address}</Text>
                )}
                <TextInput
                  activeOutlineColor="red"
                  mode="outlined"
                  inputMode="numeric"
                  label="Ödül Miktarını Giriniz"
                  numberOfLines={1}
                  value={values.prize}
                  onChangeText={handleChange('prize')}
                />
                {touched.prize && errors.prize && (
                  <Text style={{color: 'red'}}>{errors.prize}</Text>
                )}
                <Text>* Ödül vermek istemiyorsanız boş bırakınız.</Text>
                <Button
                  style={{marginVertical: '5%'}}
                  mode="contained"
                  buttonColor="red"
                  textColor="white"
                  onPress={handleSubmit}>
                  Kaydı Tamamla
                </Button>
              </>
            )}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
};
export default Declaration_Settings;
