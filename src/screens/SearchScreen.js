import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, Alert } from 'react-native';

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokémon no encontrado');
      }
      const data = await response.json();
      setPokemon({
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
        placeholder="Busca un Pokémon por nombre o ID"
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.input}
      />
      <Button title="Buscar" onPress={fetchPokemon} />

      {pokemon && (
        <View style={styles.card}>
          <Image source={{ uri: pokemon.image }} style={styles.image} />
          <Text style={styles.title}>Nombre: {pokemon.name}</Text>
          <Text>Altura: {pokemon.height}</Text>
          <Text>Habilidad: {pokemon.ability}</Text>
        </View>
      )}

      <Button
        title="Comparar Pokémon"
        onPress={() => navigation.navigate('Comparar Pokemon')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#088395',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    borderRadius: 5,
  },
  card: {
    padding: 16,
    backgroundColor: '#37B7C3',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
