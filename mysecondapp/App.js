import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import icon from './assets/JavaScript-logo.png';
import Sistemas from './Sistemas';
import TInput from './TInput';
import CompScroll from './CompScroll';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello World!!</Text>
      {/*<Image source={{uri: 'http://reactnative.dev/docs/assets/p_cat2.png'}}
        style={{width:200,height:200}}
      />
      <Image source={icon} style={{width:200,height:200}}/>*/}
      
      {/* <TInput/> */}
      
      {/*<Sistemas />*/}

        <CompScroll/>

      <StatusBar style="auto" /> 
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aquamarine',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
