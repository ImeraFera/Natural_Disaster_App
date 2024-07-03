import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#D9D9D9',
    },

    text: {
        flex: 0.1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
    },

    container2: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#D9D9D9',
        paddingHorizontal: 10,
    },

    container_form: {
        flex: 1,
        width: '100%',
        marginBottom: '2%',
        backgroundColor: 'white',
        padding: 10,
        alignSelf: 'center',
        borderRadius: 25,
    },

    form_elements: {
        marginTop: '2%',
        marginBottom: '2%',
    },

    picker: {
        backgroundColor: '#D9D9D9',
    },
    button: {
        marginVertical: '5%'

    },


});

export default styles;
