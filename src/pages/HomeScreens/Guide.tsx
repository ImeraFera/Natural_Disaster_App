import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Guide';
import db from '@react-native-firebase/database';
import Guide_Card from '../../Components/Guide_Card';

const Guide = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchGuide = async () => {
            try {
                const snapshot = await db().ref('guides').once('value');
                const fetchedData = snapshot.val();
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchGuide();

    }, []);

    console.log(data);
    return (
        <View style={styles.container}>
            <Guide_Card card_name={data[0].title} card_content={data[0].content} card_color="orange" card_img={require('../../img/deprem.png')} card_link="EarthquakeScreen" />
            <Guide_Card card_name={data[1].title} card_content={data[1].content} card_color="#1C78AD" card_img={require('../../img/sel.png')} card_link="FloodScreen" />
            <Guide_Card card_name={data[4].title} card_content={data[4].content} card_color="red" card_img={require('../../img/yangin.png')} card_link="FireScreen" />
            <Guide_Card card_name={data[3].title} card_content={data[3].content} card_color="#895913" card_img={require('../../img/heyelan.png')} card_link="LandslideScreen" />
            <Guide_Card card_name={data[2].title} card_content={data[2].content} card_color="#38B6FF" card_img={require('../../img/cig.png')} card_link="AvalancheScreen" />
        </View>
    );
};

export default Guide;
