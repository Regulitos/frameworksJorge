import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.texto}>Image of the Day</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image source={require('../../../assets/nasa.png')} style={styles.logo} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        alignItems: 'center',
        
    },

    leftContainer: {
        flex:1,
        alignItems: 'flex-start',
    },
    texto: {
        color: 'white',
        fontSize:30,
        fontWeight: 'bold'
    },
    rightContainer: {
        flex: 0.5,
        alignItems: 'flex-end',  
    },
    logo: {
        width: 100,
        height: 100,
    }

});
export default Header
