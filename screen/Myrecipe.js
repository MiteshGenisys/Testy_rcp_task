import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Myrecipe = props => {
  return (
    <View style={styles.serch}>
      <Button title="Login With Facebook"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  serch: {
    flex: 1,
    marginTop: 25,
    alignItems: 'center',
    padding: '40%'
  }
});

export default Myrecipe;