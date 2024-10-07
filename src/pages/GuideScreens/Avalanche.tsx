import { View, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { Button, Text, Card, Divider } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import Markdown from 'react-native-markdown-display';
const content = `
## Çığ Nedir?

Çığ, genellikle kar, buzul veya toprak kütlesinin bir dağın eğiminden hızla aşağıya doğru hareket etmesidir. Çığlar, ani ve büyük bir kuvvetle meydana gelir ve özellikle dağlık bölgelerde ciddi tehlikeler oluşturur.

## Çığ Öncesinde Alınacak Önlemler

- **Bölge Araştırması:** Çığ riski yüksek bölgelerde bulunuyorsanız, bölgenin çığ riski ve hava koşulları hakkında bilgi edinmek önemlidir.
- **Ekipman Kontrolü:** Çığ uyarı cihazları, çığ detektörleri ve kar ölçüm aletleri gibi güvenlik ekipmanlarını yanınıza alın ve kullanma talimatlarını öğrenin.
- **Eğitim ve Bilgi:** Çığ riskini ve çığ durumunda yapılması gerekenleri öğrenmek için eğitimlere katılın ve bilgilendirme kitapçıklarını inceleyin.

## Çığ Anında Yapılması Gerekenler

- **Hızla Hareket Edin:** Çığ meydana geldiğinde hemen güvenli bir alana hareket edin. Eğer kaçış mümkün değilse, kendinizi korumak için dağın eğimine paralel hareket edin.
- **Kafanızı Korumaya Çalışın:** Çığ sırasında başınızı korumak için elinizi kafanızın üzerine koyarak kendinizi koruyun.
- **Sürüklenme Hareketi:** Eğer çığın içinde kalırsanız, yüzeyin üzerinde kalmaya çalışın. Kollarınızı geniş açarak yukarı doğru yüzmeye çalışın.

## Çığ Sonrasında Yapılması Gerekenler

- **Sakin Olun ve Durumu Değerlendirin:** Çığ sonrası durumunuzu değerlendirin ve çevrenizdeki diğer kişilere yardım edin.
- **Arama ve Kurtarma:** Çığ altında kalan kişileri bulmak için çığ detektörlerini kullanın ve arama kurtarma ekipleriyle iletişime geçin.
- **Yetkililere Bilgi Verin:** Durumunuzu ve bulunduğunuz yeri yetkililere bildirerek yardım çağırın.

## Çığ İle İlgili Güvenlik Ekipmanları

- **Çığ Arama Çubuğu:** Çığ altında kalan kişileri aramak için kullanılır.
- **Çığ Transiveri:** Çığ durumunda sinyal göndererek konumunuzu belirlemenizi sağlar.
- **Çığ Kafesi (Avalanche Airbag):** Çığ sırasında havayla şişen bir çanta ile yüzeyde kalmanıza yardımcı olur.

## Acil Durum İletişim Bilgileri

- **112 Acil Çağrı:** Genel acil durumlar için 112'yi arayın.
- **Yerel Kurtarma Ekipleri:** Dağlık bölgelerde bulunan yerel arama ve kurtarma ekipleri ile iletişime geçin.

Bu rehber, çığ tehlikelerine karşı hazırlıklı olmanıza ve güvenliğinizi sağlamanıza yardımcı olmak için temel bilgileri içermektedir. Daha ayrıntılı bilgi ve hazırlık için ilgili kurumların önerilerine başvurabilirsiniz.

`
const Avalanche = () => {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    const route = useRoute();
    const { title } = route.params || {};

    return (
        <ScrollView style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#D9D9D9',
        }}>
            <Card style={{ width: '95%', alignSelf: 'center', margin: '5%', backgroundColor: '#38B6FF' }}>
                <Card.Title titleVariant="titleLarge" titleStyle={{ textAlign: 'center', color: 'white' }} title={title} />
                <Divider style={{ height: 1, marginVertical: '1%' }} />
                <Card.Content>
                    <Markdown
                        style={{ body: { color: 'white', fontSize: 14 } }}
                    >
                        {content}
                    </Markdown>
                </Card.Content>
                <Card.Actions>
                    <Button mode='contained' onPress={goBack}>Geri Git</Button>
                </Card.Actions>
            </Card>
        </ScrollView>
    );
};

export default Avalanche;

