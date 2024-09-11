import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text, StyleSheet, Alert } from 'react-native';

export default function CompareScreen({ navigation }) {
  const [character1, setCharacter1] = useState(null);
  const [character2, setCharacter2] = useState(null);
  const [character3, setCharacter3] = useState(null);
  const [character4, setCharacter4] = useState(null);
  const [id1, setId1] = useState('');
  const [id2, setId2] = useState('');
  const [id3, setId3] = useState('');
  const [id4, setId4] = useState('');

  const fetchCharacter = async (id, setCharacter) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) {
        throw new Error('Personaje no encontrado');
      }
      const data = await response.json();
      setCharacter({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        height: data.height,
        ability: data.abilities[0].ability.name,
      });
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Introduzca el ID del primer personaje"
        value={id1}
        onChangeText={setId1}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Obtener el primer personaje" onPress={() => fetchCharacter(id1, setCharacter1)} />

      <TextInput
        placeholder="Introduzca el ID del segundo personaje"
        value={id2}
        onChangeText={setId2}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Obtener el segundo personaje" onPress={() => fetchCharacter(id2, setCharacter2)} />

      <TextInput
        placeholder="Introduzca el ID del tercer personaje"
        value={id3}
        onChangeText={setId3}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Obtener el tercer personaje" onPress={() => fetchCharacter(id3, setCharacter3)} />

      <TextInput
        placeholder="Introduzca el ID del cuarto personaje"
        value={id4}
        onChangeText={setId4}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Obtener el cuarto personaje" onPress={() => fetchCharacter(id4, setCharacter4)} />

      {character1 && character2 && character3 && character4 && (
        <View style={styles.comparison}>
          <View style={styles.card}>
            <Image source={{ uri: character1.image }} style={styles.image} />
            <Text style={styles.title}>Name: {character1.name}</Text>
            <Text>Height: {character1.height}</Text>
            <Text>Ability: {character1.ability}</Text>
          </View>

          <View style={styles.card}>
            <Image source={{ uri: character2.image }} style={styles.image} />
            <Text style={styles.title}>Name: {character2.name}</Text>
            <Text>Height: {character2.height}</Text>
            <Text>Ability: {character2.ability}</Text>
          </View>

          <View style={styles.card}>
            <Image source={{ uri: character3.image }} style={styles.image} />
            <Text style={styles.title}>Name: {character3.name}</Text>
            <Text>Height: {character3.height}</Text>
            <Text>Ability: {character3.ability}</Text>
          </View>

          <View style={styles.card}>
            <Image source={{ uri: character4.image }} style={styles.image} />
            <Text style={styles.title}>Name: {character4.name}</Text>
            <Text>Height: {character4.height}</Text>
            <Text>Ability: {character4.ability}</Text>
          </View>
        </View>
      )}

      <Button title="Volver a la busquedad" onPress={() => navigation.navigate('Buscar Pokemon')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0A6847', 
    
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    borderRadius: 5,
  },
  comparison: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  card: {
    padding: 5,
    backgroundColor: '#7ABA78',
    alignItems: 'center',
    borderRadius: 10,
    width: '25%',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
