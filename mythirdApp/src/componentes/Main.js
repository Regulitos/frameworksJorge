import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function Main() {
    return (
        <View style={styles.container}>
            <Text>Esta es la pantalla principal</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Main
