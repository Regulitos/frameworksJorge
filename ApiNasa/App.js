import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/views/home/Home.js';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'rgba(7,26,92,255)'
  }
})
