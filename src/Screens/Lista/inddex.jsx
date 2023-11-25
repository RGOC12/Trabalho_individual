import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
    FlatList,
  } from "react-native";
  import React, { useState } from "react";
  import { FontAwesome5 } from "@expo/vector-icons";
import ListaTarefaz from "../../Components/flatList";
  
  const Tarefas = () => {
    const [novaTarefa, setNovaTarefa] = useState("Nova Tarefa");

    const [listaTarefas,setListaTarefas] = useState([])

    const adicionarTarefa = () =>{
        if(novaTarefa == "")return;
        setListaTarefas([...listaTarefas, novaTarefa]);
        setNovaTarefa("");
        console.log(...listaTarefas, novaTarefa)
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Tarefas</Text>
          <FontAwesome5
            style={{ paddingTop: 7 }}
            name="tasks"
            size={35}
            color="white"
          />
        </View>
  
        <TextInput
          value={novaTarefa}
          onChangeText={setNovaTarefa}
          style={{
            backgroundColor: "#f1f1f1",
            borderRadius: 10,
            padding: 10,
            marginTop: 20,
            marginBottom: 15,
          }}
          placeholder="Adicione uma tarefa"
        />
  
        <Button onPress={adicionarTarefa} title="Adicionar Tarefa +" />
        
       <ListaTarefaz  listaTarefas = {listaTarefas}/>

      </View>
    );
  };
  
  export default Tarefas;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 15,
      paddingVertical: 30,
      backgroundColor: "#101010",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
    },
    titulo: {
      color: "#f1f1f1",
      fontSize: 35,
      textAlign: "center",
      fontWeight: "bold",
    },
  });
  