import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.Text}>Abra o App.tsx para começar!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  Text: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  }
})