import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, } from 'react-native';
import { prototype } from 'react-native/Libraries/Image/ImageBackground';
import HomeCard from '../screen/HomeCard';


const HomeCardsConatiner = props => {
    console.log(props.data);
    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
            <Text style={{ fontSize: 15, fontWeight: '700', paddingHorizontal: 15, color: '#DE5D83' }} >{props.title}</Text>
            
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                
                { props.data.map(d =>  {return (<HomeCard obj={d}/>)}) }
            
               
            </ScrollView>
            
        </View>

    );
};

const styles = StyleSheet.create({
    
});

export default HomeCardsConatiner;