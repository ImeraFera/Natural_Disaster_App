import {View, Text, FlatList, Modal, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/Missing_Declaration';
import Missing_Declaration_Card from '../../Components/Missing_Declaration_Card';
import {Appbar, Divider, Searchbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {getMissingForms} from '../../redux/slices/appSlice';

const renderItem = ({item}) => <Missing_Declaration_Card item={item} />;

const Missing_Declaration = () => {
  const dispatch = useDispatch();

  const data = useSelector(({app}) => app.missingForms);
  const isLoading = useSelector(({app}) => app.isLoading);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredDeclarations = data?.filter(item =>
    item.name?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    const getAllMissingForms = async () => {
      await dispatch(getMissingForms()).unwrap();
    };
    getAllMissingForms();
  }, [dispatch]);

  // Yüklenme ekranı
  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <View>
        <Appbar.Header style={{backgroundColor: '#d9d9d9'}}>
          <Searchbar
            style={{backgroundColor: 'white'}}
            placeholderTextColor="red"
            iconColor="red"
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </Appbar.Header>
      </View>
      <FlatList
        data={filteredDeclarations}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id || index.toString()}
        style={{flex: 1}}
      />
    </View>
  );
};

export default Missing_Declaration;
