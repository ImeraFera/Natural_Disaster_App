import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

const Landslide = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#D9D9D9',
        },
        title: {
            height: '10%',
            fontSize: 30,
            fontWeight: '900',
            textAlign: 'center',
            textAlignVertical: 'center',
            backgroundColor: '#895914',
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            marginBottom: 15,
            color: 'white',

        },
        border: {
            flex: 1,
            borderWidth: 5,
            borderColor: '#895914',
            padding: 10,
            minWidth: '100%',
            borderRadius: 20,
        },
        text: {
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 25,
            textAlign: 'left',
            textAlignVertical: 'top',
            alignSelf: 'stretch',
            flexWrap: 'wrap',
            lineHeight: 30,

        },
    });

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Heyelan
                </Text>
                <ScrollView style={styles.border}>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dignissimos necessitatibus alias nobis molestiae nam odio nemo distinctio sequi esse soluta consectetur fugit iusto illo iste, recusandae natus. Numquam, ducimus.
                        Dolorum consequatur consequuntur, labore repudiandae praesentium voluptatibus ex. Earum qui porro beatae aliquid blanditiis consectetur, iure nihil aliquam ex vitae vel ipsum temporibus unde. Laudantium corrupti alias numquam perferendis expedita?
                        Incidunt alias ratione fugit laudantium recusandae hic temporibus ut, modi voluptas, blanditiis excepturi debitis labore qui numquam accusantium voluptates neque adipisci? Tempore ea ipsum optio. Quas fugiat repellendus voluptate aperiam.
                    </Text>
                </ScrollView>
            </View>

        </View>
    );
};

export default Landslide;
