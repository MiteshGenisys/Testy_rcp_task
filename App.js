import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Keyboard } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Navigatior from './navigation/Navigatior';
import HomeCard from './screen/HomeCard';
// import Demo from './components/Demo';

// import Recent from './screen/Recent';


const fetchfonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')

  });
};

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false); // we set the use stare default false

  if (fontsLoaded) {
    return (
      
      // <CategoryScreen />
       <Navigatior />
      // <HomeCard />
      
      
    );
  } else {
    return (<AppLoading startAsync={fetchfonts}
      onFinish={() => setFontsLoaded(true)}
      onError={() => handleError(e)} />)
  }
}


