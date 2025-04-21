import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import QuizScreen from './src/screens/QuizScreen';
import ResultsScreen from './src/screens/ResultsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Anatomia Animal' }} 
        />
        <Stack.Screen 
          name="Quiz" 
          component={QuizScreen} 
          options={{ title: 'Quiz de Anatomia' }} 
        />
        <Stack.Screen 
          name="Results" 
          component={ResultsScreen} 
          options={{ title: 'Seu Desempenho' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
