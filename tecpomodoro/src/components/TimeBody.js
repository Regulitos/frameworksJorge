import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function TimeBody({time}) {
    const formattedTime = `${Math.floor(time/60).toString().padStart(2,"0")}:${(time%60).toString().padStart(2,"0")}`
    return (
        <View style={styles.content}>
            <Text style={styles.timeLeft}>{formattedTime}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 0.35,
        backgroundColor: 'white',
        marginTop:20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    timeLeft: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'black'
    }
 
})

export default TimeBody
