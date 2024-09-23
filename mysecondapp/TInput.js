import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

function TInput(){

    const [text,onChangeText]=React.useState('useless Text')
    const [number, onChangeNumber]=React.useState('');

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
             <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder='Usa el Placeholder'
                keyboardType='numeric'
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 300,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10
    }
});

export default TInput;