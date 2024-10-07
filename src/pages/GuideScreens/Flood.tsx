import { View, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { Button, Card, Divider, Text } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import Markdown from 'react-native-markdown-display';
const content = `
## Sel Nedir?

Sel, aşırı yağış, kar erimesi veya diğer nedenlerle su seviyelerinin hızla yükselmesi sonucu meydana gelen doğal bir afet türüdür. Sel, suyun normal seviyelerini aşarak çevredeki alanları kaplar ve büyük hasarlara yol açabilir.

## Sel Öncesinde Alınacak Önlemler

- **Sel Risk Analizi:** Yağış yoğunluğu yüksek bölgelerde yaşarken, sel riskini değerlendirin. Sel riski yüksek bölgelerde yaşamıyorsanız bile, sel riski olan bölgeleri tanıyın.
- **Acil Durum Planı:** Aile üyeleriyle birlikte bir acil durum planı oluşturun. Sel durumunda nerelere gideceğinizi, hangi yolları kullanacağınızı ve nasıl iletişim kuracağınızı belirleyin.
- **Ev ve Çevre Düzenlemeleri:** Evinizin etrafında su birikintilerini önleyin. Yüksek alanlara taşınabilecek eşyalarınızı yerleştirin ve evinize su geçirmeyen bariyerler eklemeyi düşünün.

## Sel Anında Yapılması Gerekenler

- **Hızla Uzaklaşın:** Sel sularının yükselmesi durumunda hemen yüksek bir alana yönelin. Suların hızla yükseldiği durumlarda araç kullanmamaya özen gösterin.
- **Elektrik ve Gazı Kapatın:** Elektrik ve gaz hatlarını kapatarak, olası elektrik çarpması ve gaz kaçağı riskini azaltın.
- **Temiz Su ve Gıda:** Temiz su ve gıda stoklarınızı kontrol edin. Sel durumunda su ve gıda bulmak zor olabilir, bu yüzden yeterli miktarda saklayın.

## Sel Sonrasında Yapılması Gerekenler

- **Hasar Tespiti ve Kontrol:** Sel sonrası evinizi ve çevrenizi dikkatlice kontrol edin. Yapısal hasarları ve suyun neden olduğu zararları değerlendirin.
- **Temizlik ve Onarım:** Su ile temas etmiş eşyaları ve yüzeyleri temizleyin ve dezenfekte edin. Sel sonrası temizlik yaparken dikkatli olun ve güvenlik önlemlerini alın.
- **Yetkililerin Talimatlarını Takip Edin:** Yerel yetkililerin ve afet yönetim merkezlerinin talimatlarına uyun. Gerekli yardımlar ve tahliye işlemleri için yerel ekiplerle iletişim kurun.

## Sel ile İlgili Güvenlik Ekipmanları

- **Acil Durum Çantası:** Su, gıda, ilk yardım malzemeleri ve diğer gerekli eşyaların bulunduğu bir acil durum çantası hazırlayın.
- **Su Geçirmez Ekipmanlar:** Su geçirmeyen giysiler, ayakkabılar ve çantalar temin edin. Bu ekipmanlar suya karşı korunmanızı sağlar.
- **Sel Uyarı Sistemleri:** Sel uyarı sistemlerine abone olun veya yerel hava durumu raporlarını takip edin.

## Acil Durum İletişim Bilgileri

- **112 Acil Çağrı:** Genel acil durumlar için 112'yi arayın.
- **Yerel Yetkililer:** Yerel belediye ve afet yönetim merkezleri ile iletişime geçin.

Bu rehber, sel tehlikelerine karşı hazırlıklı olmanıza ve güvenliğinizi sağlamanıza yardımcı olmak için temel bilgileri içermektedir. Daha ayrıntılı bilgi ve hazırlık için ilgili kurumların önerilerine başvurabilirsiniz.

`
const Flood = () => {

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
            <Card style={{ width: '95%', alignSelf: 'center', margin: '5%', backgroundColor: '#1C78AD' }}>
                <Card.Title titleVariant="titleLarge" titleStyle={{ textAlign: 'center', color: 'white' }} title={title} />
                <Divider style={{ height: 1, marginVertical: '1%' }} />
                <Card.Content>
                    <Markdown
                        style={{
                            body: {
                                fontSize: 14,
                                color: 'white',
                            },
                        }}
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

export default Flood;
