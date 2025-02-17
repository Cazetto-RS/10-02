import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TelaSobre = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: './img/a.jpg' }} // Imagem de exemplo
        style={styles.image}
      />
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.description}>
        Este é um exemplo de aplicativo usando React Native. Aqui você pode explorar várias telas e funcionalidades.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF3E0', // Cor de fundo suave
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, // Deixa a imagem circular
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF7043',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#FF7043',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default TelaSobre;
