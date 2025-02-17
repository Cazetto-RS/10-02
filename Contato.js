import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // Para os ícones

const TelaContato = () => {
  const handleContactPress = (contactName) => {
    Alert.alert(`Você clicou em: ${contactName}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Contato</Text>
      <TouchableOpacity style={styles.contact} onPress={() => handleContactPress('elitoncamarco@etec.sp.gov.br')}>
        <Entypo name="user" size={30} color="rgb(207, 177, 160);" />
        <Text style={styles.contactText}>elitoncamarco@etec.sp.gov.br</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contact} onPress={() => handleContactPress('+55 (15) 98875-3452')}>
        <Entypo name="phone" size={30} color="rgb(207, 177, 160);" />
        <Text style={styles.contactText}>+55 (15) 98875-3452</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contact} onPress={() => handleContactPress('Rua do caralho 715')}>
        <Entypo name="house-user" size={30} color="rgb(207, 177, 160);" />
        <Text style={styles.contactText}>Rua do silva 715</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(207, 177, 160);', // Cor de fundo suave
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'rgb(88, 48, 22);',
    textAlign: 'center',
    marginBottom: 30,
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'rgb(88, 48, 22);', // Cor de fundo de cada item
    borderRadius: 10,
  },
  contactText: {
    fontSize: 18,
    color: 'rgb(207, 177, 160);',
    marginLeft: 15,
  },
});

export default TelaContato;
