import { View, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Card, Divider, Text } from 'react-native-paper';
import Markdown from 'react-native-markdown-display';
const content = `
## Deprem Nedir?

Deprem, yer yüzeyinin ani bir şekilde titremesi ile meydana gelen doğal bir olaydır. Genellikle yer kabuğundaki hareketlerden kaynaklanır ve büyük hasar oluşturabilir.

## Deprem Öncesinde Alınacak Önlemler

- **Güvenli Alanların Belirlenmesi:** Evinizde güvenli alanları belirleyin. Bu alanlar; sağlam masa altları, iç duvar dipleri ve kolonlar olmalıdır.
- **Acil Durum Çantası:** İçinde su, gıda, ilk yardım malzemeleri, el feneri, radyo, piller, battaniye ve gerekli ilaçların bulunduğu bir acil durum çantası hazırlayın.
- **Aile İletişim Planı:** Aile bireyleriyle bir acil durum iletişim planı yapın. Herkesin nereye ve nasıl ulaşabileceğini önceden belirleyin.

## Deprem Anında Yapılması Gerekenler

- **Çömel, Kapan, Tutun:** Sarsıntı başladığında hemen yere çömelin, sağlam bir mobilyanın altına kapanın ve sıkıca tutunun.
- **Pencerelerden Uzak Durun:** Kırılabilecek camlardan uzak durun. Pencerelerin yakınına yaklaşmayın.
- **Yüksek Mobilyalardan Kaçının:** Raflardan veya dolaplardan uzak durun. Bu tür eşyalar depremin etkisiyle devrilebilir.

## Deprem Sonrasında Yapılması Gerekenler

- **Sakin Olun ve Durumu Değerlendirin:** Sarsıntı bitince sakin olun ve çevrenizdeki durumu değerlendirin. İlk yardım gerektiren bir durum varsa, yardım edin.
- **Hasar Kontrolü Yapın:** Evinizdeki hasarları kontrol edin. Gaz, su ve elektrik sızıntılarına karşı dikkatli olun.
- **Yetkililerin Talimatlarını Takip Edin:** Resmi yetkililerin ve acil durum ekiplerinin talimatlarını dikkatle takip edin.

## Deprem Güvenliği İçin İpuçları

- **Yapıların Sağlamlığı:** Evinizin yapısal güvenliğini düzenli olarak kontrol edin. Gerekli tadilatları yapın ve sağlam bir yapı oluşturun.
- **Acil Durum Kitleri:** Evde her zaman acil durum kitleri bulundurun. Bu kitler; su, gıda, ilk yardım malzemeleri ve kişisel ihtiyaçlarınızı içermelidir.
- **Eğitim ve Bilinç:** Deprem güvenliği hakkında eğitim alın ve ailenizle birlikte bu bilgileri uygulayın.

## Acil Durum İletişim Bilgileri

- **112 Acil Çağrı:** Genel acil durumlar için 112'yi arayın.
- **Yerel Yetkililer:** Yerel belediye ve afet yönetim merkezleri ile iletişime geçin.

Bu rehber, deprem anında ve sonrasında güvenliğinizi sağlamak için temel bilgileri içermektedir. Daha ayrıntılı bilgi ve hazırlık için ilgili kurumların önerilerine başvurabilirsiniz.

`;

const Earthquake = () => {

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
            <Card style={{ width: '95%', alignSelf: 'center', margin: '5%', backgroundColor: '#FFA500' }}>
                <Card.Title titleVariant="titleLarge" titleStyle={{ textAlign: 'center', color: 'white' }} title={title} />
                <Divider style={{ height: 1, marginVertical: '1%' }} />
                <Card.Content style={{ flex: 1, padding: 10 }}>
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
                    <Button mode="contained" onPress={goBack}>Geri Git</Button>
                </Card.Actions>
            </Card>
        </ScrollView>
    );
};



export default Earthquake;
