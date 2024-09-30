
import { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './src/components/Header';
import TimeBody from './src/components/TimeBody';
import {Audio} from 'expo-av';

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]


export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60)
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false);

  const handleStartStop = () => {
    setIsActive(!isActive);
    playSound()
  }

  async function playSound() {
    const{sound} = await Audio.Sound.createAsync(require("./assets/sound.mp3"));
    await sound.playAsync();
  }

  useEffect(() =>{
    let interval=null;
    if(isActive){
      interval = setInterval(()=>{
        setTime(time-1)
      },1000);
    }
    else{
      clearInterval(interval);
    }
    if(time===0){
      setIsActive(false);
      setIsWorking(!isWorking);
      setTime(isWorking ? 300: 1500);
    }
    return() => clearInterval(interval);
  },[isActive,time])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>POMODORO!</Text>
      <StatusBar barStyle='dark' />
      <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime} />
      <TimeBody time={time} />
      <TouchableOpacity style={styles.buttonGo} onPress={handleStartStop}>
        <Text style={{ color: "blue", fontWeight: "bold" , alignItems: "center", fontSize: 50, marginTop: 68}}>{isActive ? "STOP": "START"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#0047f7'
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00f7f7'
  },
  buttonGo: {
    flex:0.35,
    backgroundColor: "aquamarine",
    paddingTop: 15,
    marginTop: 65,
    borderRadius:130,
    width: "48%",
    maxHeight: 240,
    alignSelf:'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlignVertical: 'center'
  }
});
