import { View, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { Button, Text, Card, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Avalanche = () => {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <ScrollView style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#D9D9D9',
        }}>
            <Card style={{ width: '95%', alignSelf: 'center', margin: '5%', backgroundColor: '#38B6FF' }}>
                <Card.Title titleVariant="titleLarge" titleStyle={{ textAlign: 'center', color: 'white' }} title="Çığ" />
                <Divider style={{ height: 1, marginVertical: '1%' }} />
                <Card.Content>
                    <Text style={{ color: 'white', }} variant="bodyLarge">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet unde libero voluptatibus. Ea explicabo natus sed officia ipsam hic quibusdam in, harum exercitationem voluptates magni delectus doloremque, consequuntur aspernatur laborum.
                        Voluptatem beatae molestias sapiente placeat et officia explicabo, illum distinctio ad quisquam odit autem reprehenderit expedita libero quam laborum recusandae aliquam praesentium cumque facere provident laboriosam odio. Voluptatibus, blanditiis porro?
                        Eum at dolores quo eligendi deleniti consequuntur sit atque, sint sapiente est iusto hic? Porro sequi quidem nisi laudantium incidunt corporis iure, excepturi hic. Consectetur qui perspiciatis neque iusto praesentium.
                        Pariatur nihil, beatae ea deserunt optio ipsam temporibus dolorem recusandae suscipit sequi tempora similique quidem accusantium delectus quas. A repellat obcaecati placeat architecto perferendis minus dolore accusantium distinctio eum quis.
                        Possimus deleniti excepturi ad expedita accusamus quaerat obcaecati, sapiente fuga, odio hic distinctio laudantium corporis. Modi obcaecati nisi, voluptate, a tempore eaque explicabo ullam necessitatibus dolores eum incidunt blanditiis placeat?
                    </Text>
                </Card.Content>
                <Card.Actions>
                    <Button mode='contained' onPress={goBack}>Geri Git</Button>
                </Card.Actions>
            </Card>
        </ScrollView>
    );
};

export default Avalanche;

