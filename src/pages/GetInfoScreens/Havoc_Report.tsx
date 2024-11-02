import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from '../../styles/Havoc_Report';
import {Button, Card, TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import {validationSchema} from '../../validationSchemas/HavocReportSchema';
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux';
import {saveHavocReport} from '../../redux/slices/appSlice';

const Havoc_Report = () => {
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const handleClickSubmit = async values => {
    setisLoading(true);
    try {
      await dispatch(saveHavocReport(values)).unwrap();
      console.log('kaydedildi');
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 0.4,
          display: 'flex',
        }}>
        <Text
          style={{
            fontSize: 36,
            fontWeight: 'bold',
            color: 'red',
          }}>
          Hasarlı Bina Rapor Et
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flex: 1,
        }}>
        <Card style={{width: '100%'}}>
          <Formik
            onSubmit={handleClickSubmit}
            initialValues={{
              province: '',
              district: '',
              street: '',
              neighborhood: '',
              stage: '',
              desc: '',
              aptName: '',
              avenue: '',
            }}
            validationSchema={validationSchema}>
            {({
              handleChange,
              handleSubmit,
              handleBlur,
              setFieldValue,
              values,
              errors,
              touched,
            }) => (
              <>
                <Card.Content>
                  <Picker
                    selectedValue={values.stage}
                    onValueChange={itemValue =>
                      setFieldValue('stage', itemValue)
                    }>
                    <Picker.Item label="Hasarın Derecesi" value="" />
                    <Picker.Item label="Az" value="low" />
                    <Picker.Item label="Orta" value="medium" />
                    <Picker.Item label="Ağır" value="high" />
                  </Picker>
                  {touched.stage && errors.stage && (
                    <Text style={{color: 'red'}}>{errors.stage}</Text>
                  )}
                  <TextInput
                    mode="outlined"
                    label="Açıklama"
                    activeOutlineColor="red"
                    value={values.desc}
                    onChangeText={handleChange('desc')}
                    onBlur={handleBlur('desc')}
                    error={touched.desc && errors.desc ? true : false}
                  />
                  <Text>
                    * Girdiğiniz bilgileri kayıt eklemeden önce kontrol ediniz.
                    Sahte raporlama yapanlar hakkında yasal işlem
                    başlatılabilir.
                  </Text>
                </Card.Content>
                <Card.Actions style={{alignSelf: 'center'}}>
                  <Button
                    mode="contained"
                    onPress={handleSubmit}
                    loading={isLoading}
                    buttonColor="red">
                    Kayıt Ekle
                  </Button>
                </Card.Actions>
              </>
            )}
          </Formik>
        </Card>
      </View>
    </View>
  );
};

export default Havoc_Report;
