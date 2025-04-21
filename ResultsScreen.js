import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ProgressChart from '../components/ProgressChart';

const ResultsScreen = ({ route, navigation }) => {
  const { score, totalQuestions, weakAreas } = route.params;
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Desempenho</Text>
      
      <ProgressChart percentage={percentage} />
      
      <Text style={styles.scoreText}>
        Você acertou {score} de {totalQuestions} questões ({percentage}%)
      </Text>
      
      {weakAreas.length > 0 && (
        <View style={styles.weakAreasContainer}>
          <Text style={styles.subtitle}>Áreas para Melhorar:</Text>
          {weakAreas.map((area, index) => (
            <Text key={index} style={styles.weakArea}>- {area}</Text>
          ))}
        </View>
      )}
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Tentar Novamente" 
          onPress={() => navigation.goBack()} 
        />
        <Button 
          title="Voltar ao Início" 
          onPress={() => navigation.popToTop()} 
        />
      </View>
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
  scoreText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  weakAreasContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  weakArea: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 20,
    gap: 10,
  },
});

export default ResultsScreen;
