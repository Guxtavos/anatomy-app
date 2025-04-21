import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Picker } from '@react-native-picker/picker';

const HomeScreen = ({ navigation }) => {
  const [category, setCategory] = useState('bones');
  const [difficulty, setDifficulty] = useState('easy');
  const [questionCount, setQuestionCount] = useState(10);

  const startQuiz = () => {
    navigation.navigate('Quiz', { 
      category, 
      difficulty, 
      questionCount 
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estudo de Anatomia Animal</Text>
      
      <Text style={styles.label}>Selecione a Categoria:</Text>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}>
        <Picker.Item label="Ossos" value="bones" />
        <Picker.Item label="Músculos" value="muscles" />
        <Picker.Item label="Órgãos" value="organs" />
      </Picker>

      <Text style={styles.label}>Nível de Dificuldade:</Text>
      <Picker
        selectedValue={difficulty}
        onValueChange={(itemValue) => setDifficulty(itemValue)}>
        <Picker.Item label="Fácil" value="easy" />
        <Picker.Item label="Médio" value="medium" />
        <Picker.Item label="Difícil" value="hard" />
      </Picker>

      <Text style={styles.label}>Número de Questões:</Text>
      <Picker
        selectedValue={questionCount}
        onValueChange={(itemValue) => setQuestionCount(itemValue)}>
        <Picker.Item label="5" value={5} />
        <Picker.Item label="10" value={10} />
        <Picker.Item label="15" value={15} />
        <Picker.Item label="20" value={20} />
      </Picker>

      <Button 
        title="Iniciar Quiz" 
        onPress={startQuiz} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default HomeScreen;
