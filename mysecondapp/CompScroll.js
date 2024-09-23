import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, Switch } from 'react-native';

function CompScroll() {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>Componente ScrollView con Button y Switch</Text>

                <Text style={styles.text}>
                    Este es un ejemplo que combina `ScrollView`, `Button`, y `Switch` en una sola interfaz.
                </Text>

                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>Switch está {isEnabled ? 'Activado' : 'Desactivado'}</Text>
                    <Switch
                        value={isEnabled}
                        onValueChange={toggleSwitch}
                        style={styles.switch}
                    />
                </View>

                <Button title="Presiona aquí" onPress={() => alert('Botón presionado')} />
                <ScrollView style={styles.longText}>
                    <Text style={styles.text}>Item 1</Text>
                    <Text style={styles.text}>Item 2</Text>
                    <Text style={styles.text}>Item 3</Text>
                    <Text style={styles.text}>Item 4</Text>
                    <Text style={styles.text}>Item 5</Text>
                    <Text style={styles.text}>Item 6</Text>
                    <Text style={styles.text}>Item 7</Text>
                    <Text style={styles.text}>Item 8</Text>
                    <Text style={styles.text}>Item 9</Text>
                    <Text style={styles.text}>Item 10</Text>
                    <Text style={styles.text}>Item 11</Text>
                    <Text style={styles.text}>Item 12</Text>
                    <Text style={styles.text}>Item 13</Text>
                    <Text style={styles.text}>Item 14</Text>
                    <Text style={styles.text}>Item 15</Text>
                    <Text style={styles.text}>Item 16</Text>
                    <Text style={styles.text}>Item 17</Text>
                    <Text style={styles.text}>Item 18</Text>
                    <Text style={styles.text}>Item 19</Text>
                    <Text style={styles.text}>Item 20</Text>
                </ScrollView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        padding: 20,
    },
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    switchLabel: {
        fontSize: 18,
        marginRight: 10,
    },
    switch: {
        marginRight: 10,
    },
    longText: {
        fontSize: 18,
        marginVertical: 10,
        height: 96,
    },
});

export default CompScroll;
