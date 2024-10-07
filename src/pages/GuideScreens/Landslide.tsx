import { View, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { Button, Card, Divider, Text } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import Markdown from 'react-native-markdown-display';
const content = `
## Heyelan Nedir?

Heyelan, genellikle toprak, kaya veya diğer materyallerin bir eğim boyunca aşağı doğru hareket etmesidir. Heyelanlar, yağışlar, yeraltı su seviyelerindeki değişiklikler, zemin özellikleri ve diğer doğal etkenler nedeniyle meydana gelebilir ve büyük hasara yol açabilir.

## Heyelan Öncesinde Alınacak Önlemler

- **Zemin ve Yapı Analizi:** Özellikle eğimli bölgelerde, zemin yapısını ve mevcut yapıları düzenli olarak analiz edin. Zemin stabilitesini değerlendiren profesyonellerle çalışın.
- **Acil Durum Planı:** Aile üyeleriyle birlikte bir acil durum planı oluşturun. Heyelan riski yüksek bölgelerde yaşarken, güvenli kaçış yollarını ve toplanma noktalarını belirleyin.
- **Su Yönetimi:** Toprağın aşırı nemlenmesini önlemek için suyun doğru şekilde yönlendirilmesini sağlayan drenaj sistemlerini kurun. Evin etrafında su birikintilerini önleyin.

## Heyelan Anında Yapılması Gerekenler

- **Hızla Uzaklaşın:** Heyelan başladığında hemen güvenli bir alana doğru hareket edin. Eğimli alanlardan ve heyelan tehdidi altındaki bölgelerden uzaklaşın.
- **Güvenli Bir Alan Seçin:** Heyelan sırasında, düz ve yüksek bir bölgeye yönelin. Eğer araç içindeyseniz, güvenli bir alan bulana kadar hareket etmeyin.
- **Acil Durum Ekiplerini Arayın:** Durumunuzu acil durum ekiplerine bildirerek yardım çağırın. 

## Heyelan Sonrasında Yapılması Gerekenler

- **Hasar Tespiti ve Kontrol:** Heyelan sonrası evinizi ve çevrenizi dikkatlice kontrol edin. Yapısal hasarları ve toprak kaymalarının etkilerini değerlendirin.
- **Yetkililerin Talimatlarını Takip Edin:** Yerel yetkililerin ve afet yönetim merkezlerinin talimatlarına uyun. Gerekli yardımlar ve tahliye işlemleri için yerel ekiplerle iletişim kurun.
- **Temizlik ve Onarım:** Güvenli bir şekilde temizlik yapın ve hasar gören yapıları onarın. Çevredeki tehlikeleri ortadan kaldırmaya çalışın.

## Heyelan ile İlgili Güvenlik Ekipmanları

- **Acil Durum Çantası:** Su, gıda, ilk yardım malzemeleri ve diğer gerekli eşyaların bulunduğu bir acil durum çantası hazırlayın.
- **Toprak Stabilizasyon Araçları:** Heyelan riskini azaltmak için toprak stabilizasyonu sağlamak üzere kullanılabilecek ekipman ve malzemeleri temin edin.
- **Güvenlik İşaretleri:** Heyelan riski olan bölgeleri belirlemek için güvenlik işaretleri ve uyarı levhaları kullanın.

## Acil Durum İletişim Bilgileri

- **112 Acil Çağrı:** Genel acil durumlar için 112'yi arayın.
- **Yerel Yetkililer:** Yerel belediye ve afet yönetim merkezleri ile iletişime geçin.

Bu rehber, heyelan tehlikelerine karşı hazırlıklı olmanıza ve güvenliğinizi sağlamanıza yardımcı olmak için temel bilgileri içermektedir. Daha ayrıntılı bilgi ve hazırlık için ilgili kurumların önerilerine başvurabilirsiniz.

`
const Landslide = () => {

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
            <Card style={{ width: '95%', alignSelf: 'center', margin: '5%', backgroundColor: '#895914' }}>
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

export default Landslide;
