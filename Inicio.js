import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TelaInicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Tela Inicial!</Text>
      <Text style={styles.subtitle}>Aqui você pode começar sua jornada.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA', // Cor de fundo suave
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00796B', // Cor verde escuro
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#00796B',
    marginBottom: 30,
  },
});

export default TelaInicial;
