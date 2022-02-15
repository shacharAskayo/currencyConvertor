import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    'btn-container': {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom:10
    },
    btn: {
        width: '45%',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#321879',
        display:'flex',
    },
    'btn-contant': {
        color: 'lightgray',
        textAlign:'center'
    },
    'list-container': {
        maxHeight:'30%',
        overflow:'scroll',
        paddingTop:10,
        paddingBottom:10,
    },
    'preview-container': {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
    },
    img: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10
    },
    'preview-and-middleware-container':{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:-10,
    }
})