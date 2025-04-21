import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const QuizCard = ({ question, selectedAnswer, onAnswer }) => {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: question.imageUrl }} 
        style={styles.image} 
        resizeMode="contain"
        alt={question.altText}
      />
      
      <Text style={styles.questionText}>{question.question}</Text>
      
      <View style={styles.answersContainer}>
        {question.answers.map((answer, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.answerButton,
              selectedAnswer === answer && styles.selectedAnswer,
              selectedAnswer !== null && answer === question.correctAnswer && styles.correctAnswer,
              selectedAnswer !== null && 
                selectedAnswer === answer && 
                answer !== question.correctAnswer && 
                styles.wrongAnswer
            ]}
            onPress={() => onAnswer(answer)}
            disabled={selectedAnswer !== null}
          >
            <Text style={styles.answerText}>{answer}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  answersContainer: {
    gap: 10,
  },
  answerButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
  },
  answerText: {
    fontSize: 16,
    textAlign: 'center',
  },
  selectedAnswer: {
    backgroundColor: '#ddd',
  },
  correctAnswer: {
    backgroundColor: '#a5d6a7',
  },
  wrongAnswer: {
    backgroundColor: '#ef9a9a',
  },
});

export default QuizCard;
