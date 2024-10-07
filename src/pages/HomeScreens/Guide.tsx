import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Guide';
import firestore from '@react-native-firebase/firestore';
import Guide_Card from '../../Components/Guide_Card';

const images = {
    Deprem: require('../../img/deprem.png'),
    Sel: require('../../img/sel.png'),
    Yangın: require('../../img/yangin.png'),
    Çığ: require('../../img/cig.png'),
    Heyelan: require('../../img/heyelan.png'),

};


const Guide = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGuide = async () => {
            try {
                const snapshot = await firestore().collection('disaster_guides').get();
                const fetchedData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                console.log(fetchedData);
                setData(fetchedData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data: ', error);
                setLoading(false);
            }
        };

        fetchGuide();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (

        <View style={styles.container}>
            {data.map((item, index) => (
                <Guide_Card
                    key={item.id}
                    card_name={item.title}
                    card_color={item.color}
                    card_img={images[item.title]}
                    card_link={item.cardLink}
                />
            ))}
        </View>
    );
};

export default Guide;
