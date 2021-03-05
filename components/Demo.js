import React from 'react';
import { View, Image, Text,FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import data from '../data/data.json';

const Demo = props => {
    return (
        <View style={{marginTop: 40, padding: 10}} >
            <Text>{data.label}</Text>
            
            <Image
                style={{ width: 100, height: 100 }}
                resizeMode={'cover'}
                source={{
                    uri: data.image,
                }}
            />
            
            <Text>{data.subtitle}</Text>
           
        </View>
    );
};


const styles = StyleSheet.create({
    searchbar: {
        flex: 1
    },
    scrl: {
        marginTop: 75,
        margin: 15,
    }
});

export default Demo;