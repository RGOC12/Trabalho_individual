import { StyleSheet, Platform, StatusBar } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        backgroundColor:'#195ab4',
        flex:1,
        paddingTop:Platform.OS === "android" ? 25:0,
    },
    logo:{
        width:100,
        height:40,
        margin: 25,
        resizeMode:'stretch',
    },
    area2:{
        flex:1,
        marginTop:110,
        marginLeft:20,
        paddingRight:100
    },
    texto:{
        color:'white',
        fontSize:25,

    },

texto2:{
    color:'white',
    marginBottom:40

},
texto3:{
    color:'white',
    marginTop:130

},
    
})

