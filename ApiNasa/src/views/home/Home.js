import React from 'react';
import Header from '../../components/header/Header.js';
import fetchApi from '../../utils/fetch.js';
import TodaysImage from '../../components/todaysImage/TodaysImage.js';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

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
            <TodaysImage url={imageUrl} copy={copy} date={date} title={title} description={description}/>          
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#22357a',
        flex: 1,
        paddingHorizontal:17,
        paddingTop: 40

    }
});
export default Home
