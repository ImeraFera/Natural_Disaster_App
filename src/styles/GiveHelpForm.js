import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#D9D9D9',
        paddingTop: 10,
        paddingBottom: 10,

    },
    form_container: {
        flex: 1,
        width: '90%',
        marginBottom: '2%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 25,
    },
    title: {
        flex: 0.1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
    },
    card_container: {
        flex: 1,
        backgroundColor: '#9B97FF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    card_header: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 5,
    },
    card_title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    card_body: {
        flex: 1,
        padding: 10,
    },
    card_desc_title: {
        color: '#FFFF00',
        fontSize: 20,
        fontWeight: 'bold',
    },
    card_row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 5,
    },
    card_desc: {
        flex: 1,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
        flexWrap: 'wrap',
    },
    modal_container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal_container2: {
        flex: 0.2,
        width: '90%',
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modal_header: {
        padding: 10,

    },
    modal_body: {
        backgroundColor: 'white',
        padding: '5%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

});

export default styles;
