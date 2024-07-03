import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF9999',
        marginBottom: 15,
        padding: 10,
        alignContent: 'center',
        flexDirection: 'row',
    },
    username_container: {
        flex: 0.7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    img_container: {
        flex: 0.4,
        alignItems: 'flex-start',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginLeft: 5,
    },
    username: {
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'white',
        textAlign: 'center',
    }
});

export default styles;
