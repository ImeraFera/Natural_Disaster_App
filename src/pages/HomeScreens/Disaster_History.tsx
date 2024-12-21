import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../styles/Disaster_History';
import Disaster_Card from '../../Components/Disaster_Card';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';
import {getDisasterHistories} from '../../redux/slices/appSlice';
import {card_fields} from '../../tempData/data';

const Disaster_History = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(({app}) => app.isLoading);
  const data = useSelector(({app}) => app.disasterHistories);

  useEffect(() => {
    const getAllDisasterHistories = async () => {
      await dispatch(getDisasterHistories()).unwrap();
    };
    getAllDisasterHistories();
  }, [dispatch]);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      {card_fields.map((item, index) => (
        <Disaster_Card
          key={index}
          card_name={item.card_name}
          card_img={item.card_img}
          card_color={item.card_color}
          card_link={item.card_link}
          data={data && data.length > 0 ? data : null}
        />
      ))}
    </View>
  );
};

export default Disaster_History;
