import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { generateAnatomyImage, generateQuizQuestions } from '../services/aiService';
import QuizCard from '../components/QuizCard';

const QuizScreen = ({ route, navigation }) => {
  const { category, difficulty, questionCount } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const loadQuestions = async () => {
      const generatedQuestions = await generateQuizQuestions(category, difficulty, questionCount);
      setQuestions(generatedQuestions);
      setIsLoading(false);
    };
    
    loadQuestions();
  }, []);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        navigation.navigate('Results', { 
          score, 
          totalQuestions: questions.length,
          weakAreas: calculateWeakAreas() 
        });
      }
    }, 1000);
  };

  const calculateWeakAreas = () => {
    // Implementar lógica para identificar áreas fracas baseada nas respostas erradas
    // Retornar um array com as categorias que precisam de mais estudo
    return [];
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Carregando questões...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Pontuação: {score}/{currentQuestion}</Text>
      <Text style={styles.progress}>Questão {currentQuestion + 1}/{questions.length}</Text>
      
      <QuizCard 
        question={questions[currentQuestion]} 
        selectedAnswer={selectedAnswer}
        onAnswer={handleAnswer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progress: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default QuizScreen;
