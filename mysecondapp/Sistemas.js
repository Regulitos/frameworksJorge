import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


function Sistemas() {

    return (

        <View
            style={{
                flexDirection: 'column',
                height: 500,
                alignItems:'center',
                width: '100%',
                padding: 20
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    height: 250,
                    width: 250,
                    padding: 20
                }}
            >
                <View style={{ backgroundColor: 'blue', flex: 1 , marginRight: 10}} />
                <View style={{ backgroundColor: 'black', flex: 1 , marginLeft: 10}} />   
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    height: 250,
                    padding: 20,
                    borderWidth: 1, 
                    borderColor: 'black', 
                }}
            >
                <View style={{ backgroundColor: 'red', flex: 1 , }} />
                <Text>Hoy es lunes de relax</Text>
                <View style={{ backgroundColor: 'yellow', flex: 1 }} />
                
            </View>
        </View>
    );
}

export default Sistemas