import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function TimeBody({time}) {
    return (
        <View style={styles.content}>
            <Text style={styles.timeLeft}>{time}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 0.2,
        backgroundColor: 'white',
        marginTop:10,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    timeLeft: {
        fontSize: 70,
        fontWeight: 'bold',
        color: 'black'
    }
 
})

export default TimeBody
