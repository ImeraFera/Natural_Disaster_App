import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Disaster_Container = () => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {

        },
        border: {

        }
    });

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Disaster_Container</Text>
                <View style={styles.border}>

                </View>
            </View>

        </View>
    );
};

export default Disaster_Container;

const styles = StyleSheet.create({});
