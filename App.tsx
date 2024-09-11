import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ComparisonScreen from './src/screens/ComparisonScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Buscar Pokemon" component={SearchScreen} />
        <Stack.Screen name="Comparar Pokemon" component={ComparisonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
