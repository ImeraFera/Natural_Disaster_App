import { View, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Card, Divider, Text } from 'react-native-paper';
import Markdown from 'react-native-markdown-display';
const content = `
## Yangın Nedir?

Yangın, kontrolsüz bir şekilde yayılan ve çevresindeki her şeyi tüketen bir ateş olayını ifade eder. Yangınlar, doğal nedenlerle veya insan kaynaklı olarak meydana gelebilir ve büyük hasara yol açabilir.

## Yangın Öncesinde Alınacak Önlemler

- **Yangın Güvenlik Planı:** Aile üyeleriyle birlikte bir yangın güvenlik planı oluşturun. Yangın anında hangi çıkışları kullanacağınızı, nasıl iletişim kuracağınızı ve hangi toplanma alanlarına gideceğinizi belirleyin.
- **Acil Durum Çantası:** İçinde ilk yardım malzemeleri, su, gıda, el feneri, bataryalar ve diğer gerekli eşyaların bulunduğu bir acil durum çantası hazırlayın.
- **Yangın Algılama ve Söndürme Ekipmanları:** Evde bir duman dedektörü ve yangın söndürücü bulundurun. Yangın söndürücüler düzenli olarak kontrol edilmeli ve bakım yapılmalıdır.

## Yangın Anında Yapılması Gerekenler

- **Sakin Kalın ve Hızla Hareket Edin:** Yangın başladığında panik yapmadan sakin kalın ve planınıza uygun olarak hareket edin. Yangından kaçarken asansör kullanmamaya özen gösterin.
- **Duman ve Sıcaklıktan Kaçının:** Dumanlı veya sıcak alanlardan uzak durun. Yere alçalarak nefes almayı kolaylaştıran bir pozisyonda hareket edin.
- **Acil Durum Numaralarını Arayın:** Yangın durumu için hemen 112 acil çağrı numarasını arayın ve durumu bildirin.

## Yangın Sonrasında Yapılması Gerekenler

- **Evinizi Kontrol Edin:** Yangın sonrasında evinizdeki hasarları dikkatlice kontrol edin. Elektrik ve gaz hatlarını kontrol edin ve güvenli olmayan durumlarda yetkililerle iletişime geçin.
- **Temizlik ve Onarım:** Yangın sonrası temizlik yaparken dikkatli olun ve zararlı kimyasallardan kaçının. Hasar gören eşyaları ve yapıları onarın veya değiştirin.
- **Psikolojik Destek:** Yangın sonrası stres ve travma yaşanabilir. Bu tür durumlarda profesyonel destek ve danışmanlık almayı düşünün.

## Yangın Güvenliği İçin İpuçları

- **Sigara İçmeyin:** Evin içinde sigara içmekten kaçının. Sigara izmaritleri yangın riski oluşturabilir.
- **Elektrik Eşyalarını Kontrol Edin:** Elektrik kablolarını düzenli olarak kontrol edin ve hasar görmüş olanları hemen değiştirin.
- **Açık Alevleri Kontrol Edin:** Mumları ve açık alevleri gözetimsiz bırakmayın. Yanıcı maddelerin yakınında açık alev bulundurmayın.

## Acil Durum İletişim Bilgileri

- **112 Acil Çağrı:** Yangın durumunda hemen 112'yi arayın.
- **Yerel Yangın İstasyonları:** Yerel yangın istasyonları ve acil durum ekipleri ile iletişime geçin.

Bu rehber, yangın anında ve sonrasında güvenliğinizi sağlamak için temel bilgileri içermektedir. Daha ayrıntılı bilgi ve hazırlık için ilgili kurumların önerilerine başvurabilirsiniz.

`
const Fire = () => {
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
            <Card style={{ width: '95%', alignSelf: 'center', margin: '5%', backgroundColor: 'red' }}>
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

export default Fire;
