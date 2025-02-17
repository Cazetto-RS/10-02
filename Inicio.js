import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native'; // Importando ImageBackground

const TelaInicial = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./img/a.jpg')} // Substitua pelo caminho da sua imagem
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo à Tela Inicial!</Text>
        <Text style={styles.subtitle}>Aqui você pode começar sua jornada.</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Faz com que a imagem ocupe toda a tela
    justifyContent: 'center', // Alinha os itens no centro (caso queira)
    resizeMode: 'cover', // Ajusta a imagem para cobrir toda a tela
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
