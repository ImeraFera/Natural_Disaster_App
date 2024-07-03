import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles/Home';
import Home_Card from './Components/Home_Card';

const Home = () => {

    return (

        <View style={styles.container}>
            <View style={styles.left_column}>

                <Home_Card card_name="Afet Rehberi" card_img={require('./img/rehber.png')} card_color="#FF66C4" card_link="Guide_Screen" />

                <Home_Card card_name="Afet Tarihi" card_img={require('./img/deprem.png')} card_color="gray" card_link="DisasterHistory_Screen" />

                <Home_Card card_name="Yardım Et Yardım Al" card_img={require('./img/yardimetveal.png')} card_color="#8C52FF" card_link="Help_Screen" />
            </View>
            <View style={styles.right_column}>

                <Home_Card card_name="Acil Yardım" card_img={require('./img/acilyardim.png')} card_color="red" card_link="EmergencyAid_Screen" />

                <Home_Card card_name="Toplanma Alanları" card_img={require('./img/toplanmaalani.png')} card_color="#00BF63" card_link="AssemblyArea_Screen" />

                <Home_Card card_name="Profilim" card_img={require('./img/hesabim.png')} card_color="#FFBD59" card_link="ProfileMain_Screen" />
            </View>

        </View>

    );
};

export default Home;
