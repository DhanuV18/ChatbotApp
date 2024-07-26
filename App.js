import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import ChatbotApp from './ChatbotApp.js';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.heading}>
                Vishy Chatbot App
            </Text>

            <ChatbotApp />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 40,
    backgroundColor: "#A1D6E2",
    color: "#F1F1F2"
    
  },
  heading: {
    color: "#00246B",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default App;


