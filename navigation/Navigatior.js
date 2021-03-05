import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../components/Home';
import Myrecipe from '../screen/Myrecipe';

const Navigatior = createBottomTabNavigator(
    {
    Discover: Home,
    My_Recipes: Myrecipe

}, {
    tabBarOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: 'blue',
    }
});

export default createAppContainer(Navigatior);