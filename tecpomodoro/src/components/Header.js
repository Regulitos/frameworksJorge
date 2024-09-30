import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const options = ["Pomodoro", "Short Break", "Long Break"]

function Header({ currentTime, setCurrentTime, setTime }) {

    function handlePress(index){
        const newTime= index === 0? 25: index === 1?5 : 15;
        setCurrentTime(index);
        setTime(newTime * 60)
    }
    return (
        <View style={styles.view}>
            {options.map((item, index) => (
                <TouchableOpacity key={index} style={styles.itemStyle} onPress={()=>handlePress(index)}>
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
