import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = (itemData) => {
    return (
    <View>
        <Text style={styles.gridItem} >
            {itemData.item.title}
        </Text>
    </View>
  );
};

const CategoryScreen = props => {
    return(
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem} 
            numColumns={2} />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 10,
        height: 150
    }
});

export default CategoryScreen;




// return <View><Text>{itemData.item.title} </Text> </View>;