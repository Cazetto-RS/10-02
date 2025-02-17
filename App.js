import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, ImageBackground } from 'react-native';

import TelaInicial from './Inicio';
import TelaSobre from './Sobre';
import TelaContato from './Contato';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tabs.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 16, marginBottom: 5 },
            tabBarStyle: styles.tabBarStyle,
          }}
          tabBarOptions={{
            activeTintColor: '#FFF',
            inactiveTintColor: '#D3D3D3',
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

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Garante que a imagem cubra toda a tela
    resizeMode: 'cover', // Ajusta o redimensionamento da imagem (pode ser 'cover' ou 'contain')
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    borderTopWidth: 0,
  },
});
