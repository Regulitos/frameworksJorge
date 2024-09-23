import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const options = ["Pomodoro", "Short Break", "Long Break"]

function Header({ time }) {
    return (
        <View style={styles.view}>
            {options.map((item, index) => (
                <TouchableOpacity key={index} style={styles.itemStyle}>
                    <Text style={styles.Text}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>

    )
}

const styles = StyleSheet.create({
    view:{
        flexDirection:"row",
    },
    itemStyle:{
        width:"33%",       
        padding:10
    },
    Text:{
        fontSize:15,
        borderWidth:2,
        borderRadius:15,
        textAlign:"center",
        color:"#00f7f7",
        borderColor:"#00f7f7"
    }
})

export default Header
