import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    top_container: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold'
    },

    map_container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    }
});

export default styles;
