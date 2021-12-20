import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style = { styles.container } >
      <Text style = { styles.textbold }>Mr. Santirat Romklaofangam</Text>
      <Text> Mr.Santirat Romklaofangam </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66FF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbold: {
    fontSize: 20,
    fontWeight: 'bold' ,
    color: '#0000FF' ,
  },
});
