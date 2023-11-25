import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons';




const Home = ({navigation}) => {
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View>
                <Image style={styles.logo} source={require('../../../assets/BPAC3.SA_BIG.D.png')} />
            </View>

            <View style={styles.area2}>
                <Text style={styles.texto}>Que bom te ver por aqui, Fulano!</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Tarefas')} style={{ backgroundColor: 'white', width: 80, height: 50, marginTop: 20, borderRadius: 7, marginBottom:30 }}>
                    <Text style={{ marginLeft: 20, marginTop: 15 }}>
                        Entrar
                    </Text>
                </TouchableOpacity>
                <Text style={styles.texto2}>Entrar com outra conta  <AntDesign name="right" size={14} color="white" /> </Text>
                <Text style={styles.texto2}>Iniciar novo cadastro  <AntDesign name="right" size={14} color="white" /></Text>
                <Text style={styles.texto3}>Token</Text>
                <Text style={{marginTop:10}}>
                <AntDesign name="ellipsis1" size={24} color="white" /><AntDesign name="ellipsis1" size={24} color="white" />              <AntDesign name="eyeo" size={18} color="white" />
                </Text>
                <Text style={{color:'white',fontWeight: 'bold',marginTop:-5}}>__________________</Text>
                <View style={{flexDirection:'row'}}>

                <View style={{ marginRight:10, height:100,width:100,justifyContent:'center',alignItems:'center'}}>
                    <Image style={{ width:30,height:30,resizeMode:'stretch',marginRight:50}} source={require('../../../assets/icons8-foto-50.png')} />
                    <Text style={{color:'white',marginTop:10,marginRight:50}}>Pix</Text>
                </View>
                <View style={{ marginRight:10, height:100,width:100,justifyContent:'center',alignItems:'center'}}>
                    <Image style={{ width:30,height:23,resizeMode:'stretch'}} source={require('../../../assets/icons8-barcode-64.png')} />
                    <Text style={{color:'white',marginTop:10}}>Pagar</Text>
                </View>
                <View style={{ marginRight:10, height:100,width:100,justifyContent:'center',alignItems:'center',marginLeft:40}}>
                    <Image style={{ width:30,height:33,resizeMode:'stretch',marginLeft:20}} source={require('../../../assets/icons8-help-50.png')} />
                    <Text style={{color:'white',marginTop:5, marginLeft:38}}>Precisa de ajuda?</Text>
                </View>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home