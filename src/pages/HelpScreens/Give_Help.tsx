import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import styles from '../../styles/GiveHelp';
import Help_List_Card from '../../Components/Help_List_Card';
import {useDispatch, useSelector} from 'react-redux';
import {getHelpForms} from '../../redux/slices/appSlice';

const renderItem = ({item}) => <Help_List_Card item={item} />;
const Help = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllHelpList = async () => {
      await dispatch(getHelpForms()).unwrap();
    };
    getAllHelpList();
  }, [dispatch]);

  const data = useSelector(({app}) => app.helpForms);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yardım İlan Listesi</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        initialNumToRender={10}
        windowSize={5}
        style={{flex: 1}}
      />
    </View>
  );
};

export default Help;
