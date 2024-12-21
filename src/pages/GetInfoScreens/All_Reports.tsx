import {View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, Card, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {getAllHavocReports} from '../../redux/slices/appSlice';
import Report_Card from '../../Components/Report_Card';

const All_Reports = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const allReports = useSelector(({app}) => app.allReports);

  useEffect(() => {
    setIsLoading(true);
    const fetchAllHavocReports = async () => {
      await dispatch(getAllHavocReports()).unwrap();
      setIsLoading(false);
    };
    fetchAllHavocReports();
  }, [dispatch]);

  if (isLoading) {
    return <ActivityIndicator></ActivityIndicator>;
  }
  console.log(allReports);
  return (
    <View
      style={{
        display: 'flex',
        backgroundColor: 'lightgray',
        height: '100%',
      }}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'orange',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 22,
            padding: 2,
          }}>
          Onay Bekleyen Raporlar
        </Text>
      </View>
      <ScrollView
        style={{
          maxHeight: '50%',
        }}>
        {allReports?.map(report => {
          return (
            !report?.isConfirmed && <Report_Card report={report}></Report_Card>
          );
        })}
      </ScrollView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'green',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 22,
            padding: 2,
          }}>
          Onaylanan Raporlar
        </Text>
      </View>
      <ScrollView
        style={{
          maxHeight: '50%',
        }}>
        {allReports?.map(report => {
          return (
            report?.isConfirmed && <Report_Card report={report}></Report_Card>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default All_Reports;
