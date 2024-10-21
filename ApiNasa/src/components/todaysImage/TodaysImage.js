import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';

function TodaysImage({ copy, date, title, url, description }) {
    
    const [mostrarDescripcion, setMostrarDescripcion] = useState(false); // Estado para controlar si la descripción es visible o no

    // Función para manejar la acción del botón
    const manejarPresionBoton = () => {
        setMostrarDescripcion(!mostrarDescripcion); // Cambia el estado al contrario (mostrar/ocultar)
    };

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: url }}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.fecha}>{copy} {date}</Text>

                {/* Muestra la descripción solo si mostrarDescripcion es true */}
                {mostrarDescripcion && <Text style={styles.texto}>{description}</Text>}
                
                <View style={styles.buttonContainer}>
                    {/* El título del botón cambia según el estado */}
                    <Button 
                        title={mostrarDescripcion ? "Hide" : "View"} 
                        onPress={manejarPresionBoton} 
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#2c449d',
        marginVertical: 16,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 32
    },
    imageContainer: {
        borderWidth: 2,
        borderRadius: 32
    },
    image: {
        width: '100%',
        height: 300,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 32
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        marginVertical: 12,
        fontSize: 20
    },
    fecha: {
        color: '#fff',
        fontSize: 16,
        marginTop: 8
    },
    texto: {
        color: '#fff',
        fontSize: 12,
        marginTop: 8,
        textAlign: 'justify', // Para mejorar la presentación de la descripción
    },
    buttonContainer: {
        alignItems: 'flex-end'
    }
});

export default TodaysImage;
