import React from 'react';
import { View, Image, Text, ImageBackground, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const HomeImage = props => {
    return (
        <View>
        <ImageBackground source={{ uri: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/07e0913f69904e4a86fd5df215bffca3/YT_Final_1.jpg?resize=1600:*&output-format=jpg&output-quality=auto' }}
            style={{
                width: '100%',
                height: 200,
                justifyContent: 'flex-start',
            }} >
            <Text style={{flex:2, fontWeight: 'bold', color: 'white', fontSize: 24, marginTop: 100 }} >Korean Street Food-Style Potato Hot Dogs</Text>
            </ImageBackground>
        </View>
    );
};

export default HomeImage;