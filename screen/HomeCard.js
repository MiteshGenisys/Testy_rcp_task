import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';


const HomeCardsConatiner = props => {
    
    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
            <Text style={{ fontSize: 15, fontWeight: '700', paddingHorizontal: 15, color: '#DE5D83' }} >{props.title}</Text>
            <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
            >
            <View style={{ height: 130, marginTop: 20 }} >
                
                    <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderRightColor: '#dddddd' }} >
                        <View style={{ flex: 1 }} >
                        <TouchableOpacity>
                            <Image source={{ uri: props.obj.image }}
                                style={{
                                    width: '100%',
                                    height: 200,
                                    justifyContent: 'flex-start',
                                }} />
                        </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }} >{ props.obj.title }</Text>
                        </View>
                    </View> 
            
            </View> 
                
            </ScrollView>
            
        </View>

    );
};

const styles = StyleSheet.create({
    
});

export default HomeCardsConatiner;