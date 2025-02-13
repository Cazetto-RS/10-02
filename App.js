import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

import TelaInicial from './Inicio';
import TelaSobre from './Sobre';
import TelaContato from './Contato';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{ tabBarLabelStyle: { fontSize: 16 } }}
        tabBarOptions={{
          activeTintColor: '#00796B',
          inactiveTintColor: '#B2DFDB',
        }}
      >
        <Tabs.Screen
          name="Inicio"
          component={TelaInicial}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="Sobre"
          component={TelaSobre}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="info" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="Contato"
          component={TelaContato}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="phone" color={color} size={size} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
