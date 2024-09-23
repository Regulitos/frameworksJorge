import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import repo from '../../data/Repositorios';

function Repos() {
    return (
        <FlatList
            data={repo}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({ item: repo }) => (
                <View style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}>
                    <Text>{repo.id}</Text>
                    <Text>{repo.fullName}</Text>
                    <Text>{repo.description}</Text>
                    <Text>{repo.language}</Text>
                    <Text>{repo.forksCount}</Text>
                    <Text>{repo.stargazersCount}</Text>
                    <Text>{repo.ratingAverage}</Text>
                    <Text>{repo.reviewCount}</Text>
                    <Image
                        source={{uri:repo.ownerAvatarUrl}}
                        style={{ width: 200, height: 200}}
                    ></Image>
                </ View>
            )}
        />
            );
}



export default Repos;
