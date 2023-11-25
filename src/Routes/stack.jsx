import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tarefas from "../Screens/Lista/inddex"
import Home from '../Screens/Home';

const { Navigator, Screen } = createNativeStackNavigator()

export const Routes = () => {

  return (
    <NavigationContainer>

      <Navigator>
        <Screen name="Home" 
        component={Home} 
        options={{
          headerShown: false
        }}
        />
        <Screen name="Tarefas" component={Tarefas} />

      </Navigator>
    </NavigationContainer>
  )
}