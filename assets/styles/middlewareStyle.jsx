
import { StyleSheet } from 'react-native'


export default StyleSheet.create({

    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginBottom:20
    },
    circle: {
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#321879',
        borderRadius: 50,
    },
    close: {
        marginRight: -2,
        transform: [
            { rotate: '90deg' },
        ],
        fontSize: 20,
        color: 'lightgray',
    },
    open:{
        marginLeft: -4,
        fontSize: 20,
        color: 'lightgray',
        transform: [
            { rotate: '270deg' },
        ],
    },
    "middleware-statement":{
        marginTop:25,
        marginBottom:5
    },
    'currency-name':{
        fontSize:18,
        color: '#321879',


    }
});