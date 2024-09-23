
import { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import TimeBody from './src/components/TimeBody';

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]


export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState (25*60)
  const [currentTime, setCurrentTime] = useState("POMO"|"SHORT"|"BREAK")
  console.log(currentTime)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>POMODORO!</Text>
      <StatusBar barStyle='dark' />
      <Header time={time}/>
      <TimeBody time={time}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#0047f7'
  },
  text:{
    fontSize:50,
    fontWeight:'bold',
    textAlign: 'center',
    color: '#00f7f7'
  }
});
