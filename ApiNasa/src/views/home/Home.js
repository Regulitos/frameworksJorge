import React from 'react';
import Header from '../../components/header/Header.js';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import fetchApi from '../../utils/fetch.js';

function Home() {
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [copy, setCopy] = useState('');
    const [title, setTitle] = useState('');
    useEffect(() => {
        const loadTodaysImage = async () => {
            try {
                const loadTodaysImage = await fetchApi();
                console.log(loadTodaysImage);
                setImageUrl(loadTodaysImage.url);
                setDescription(loadTodaysImage.explanation);
                setDate(loadTodaysImage.date);
                setCopy(loadTodaysImage.copyright);
                setTitle(loadTodaysImage.title);
            }
            catch (e) {
                console.log(e);
            }
        }
        loadTodaysImage().catch(null);
    }, []);
    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>{title}</Text>
            <Image
                source={{ uri: imageUrl }}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.fecha}>{copy} {date}</Text>
            <Text style={styles.texto}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 17,
        paddingTop: 40

    },
    image: {
        height: 320,
        width: '100%',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
    },
    fecha: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'right',
        color: 'white',
        marginBottom: 20,
        marginTop: -30
    },
    texto: {
        textAlign: 'justify',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white'
    }
});
export default Home
