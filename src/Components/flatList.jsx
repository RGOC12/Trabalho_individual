import { Text, FlatList } from 'react-native'
import React from 'react'

const ListaTarefaz = ({listaTarefas}) => {
  return (
    <FlatList
    data={listaTarefas}
    keyExtractor={(item)=>item}
    renderItem={({item})=> (
        <Text style={{textDecorationLine:"underline", color:'white', fontSize: 35}}>
        {item}
    </Text>
    )}
/>
  )
}

export default ListaTarefaz