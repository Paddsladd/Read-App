import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './screens/Home';
import Read from './screens/Read';
import ReadOnTime from './screens/ReadOnTime';
import End from './screens/End';

export default function App() {
  const [screen, setScreen] = useState<
    'home' | 'read' | 'readOnTime' | 'endScreen'
  >('home');
  const [points, setPoints] = useState(0);

  function home() {
    setScreen('home');
  }

  function read() {
    setScreen('read');
  }

  function readOnTime() {
    setScreen('readOnTime');
  }

  function doneReading(pages: number[]) {
    setPoints(pages.length);
    setScreen('endScreen');
  }

  return (
    <View style={styles.container}>
      {screen === 'home' ? (
        <Home read={read} readOnTime={readOnTime} />
      ) : screen === 'read' ? (
        <Read doneReading={doneReading} />
      ) : screen === 'readOnTime' ? (
        <ReadOnTime />
      ) : (
        <End returnToHome={home} points={points} />
      )}

      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
