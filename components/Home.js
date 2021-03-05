import React from 'react';
import { View, Image, Text, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

import HomeImage from './HomeImage';
import SeachBar from './SearchBar';
import Recent from '../screen/Recent';
import HomeCardsConatiner from '../screen/HomeCardsConatiner';
import data from '../data/data.json';

const Home = props => {
    return (
        <View>
            <View>
                <SeachBar style={styles.searchbar}></SeachBar>
            </View>
            <View>
                <ScrollView scrollEventThrottle={16}
                            showsVerticalScrollIndicator={false} 
                            style={styles.scrl}
                >
                    <HomeImage />                
                     {
                        Object.keys(data).map(key => { 

                            return (
                                <HomeCardsConatiner title={key} data={data[key]}/>
                            )
                        })
                     }

                    <Recent />              
                </ScrollView>
            </View>
            
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

export default Home;