import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';

const SeachBar = props => {
  return (
    <View style={styles.serch}>
      <View style={{ height: 70, backgroundColor: 'white', justifyContent: 'center', paddingHorizontal: 5 }}>
        <Animatable.View animation="slideInRight" duration={500} style={{ height: 40, backgroundColor: '#f6f6f6', flexDirection: 'row', padding: 1, alignItems: 'center', borderRadius: 15, margin: 10 }}>
          <TextInput placeholder="Search" style={{ fontSize: 20, marginLeft: 15, flex: 1 }} />
        </Animatable.View>
      </View>

      <View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  serch: {
    flex: 1,
    marginTop: 25
  }
});

export default SeachBar;