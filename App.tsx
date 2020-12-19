import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JournalView from './screens/JournalView';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark"/>
      <SafeAreaView>
        <JournalView/>
      </SafeAreaView>
    </View>
  );
}

