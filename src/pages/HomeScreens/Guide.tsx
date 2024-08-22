import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Guide';
import db from '@react-native-firebase/database';
import Guide_Card from '../../Components/Guide_Card';

const Guide = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGuide = async () => {
            try {
                const snapshot = await db().ref('guides').once('value');
                const fetchedData = snapshot.val();
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
            {data[0] && (
                <Guide_Card
                    card_name={data[0].title}
                    card_content={data[0].content}
                    card_color="orange"
                    card_img={require('../../img/deprem.png')}
                    card_link="EarthquakeScreen"
                />
            )}
            {data[1] && (
                <Guide_Card
                    card_name={data[1].title}
                    card_content={data[1].content}
                    card_color="#1C78AD"
                    card_img={require('../../img/sel.png')}
                    card_link="FloodScreen"
                />
            )}
            {data[4] && (
                <Guide_Card
                    card_name={data[4].title}
                    card_content={data[4].content}
                    card_color="red"
                    card_img={require('../../img/yangin.png')}
                    card_link="FireScreen"
                />
            )}
            {data[3] && (
                <Guide_Card
                    card_name={data[3].title}
                    card_content={data[3].content}
                    card_color="#895913"
                    card_img={require('../../img/heyelan.png')}
                    card_link="LandslideScreen"
                />
            )}
            {data[2] && (
                <Guide_Card
                    card_name={data[2].title}
                    card_content={data[2].content}
                    card_color="#38B6FF"
                    card_img={require('../../img/cig.png')}
                    card_link="AvalancheScreen"
                />
            )}
        </View>
    );
};

export default Guide;
