import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import HomeScreen from './screens/homeScreen';
import Popular from './screens/popular';
import Recommended from './screens/recommendation';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createMaterialTopNavigator} from 'react-navigation-tabs' 
import {RFValue} from 'react-native-responsive-fontsize'

export default function App() {
  return (
   <AppContainer/>
  );
}

const AppTopNavigation=createMaterialTopNavigator({
  RecommendedMovies:{screen:Recommended,
   navigationOptions:{
     tabBarLabel:"Recommended",
     tabBarOptions:{
       tabStyle:{backgroundColor:"#FFF"},
       labelStyle:{color:"#000"},
       indicatorStyle:{backgroundColor:"#000"}
     }
   }
  },
   PopularMovies:{screen:Popular,
    navigationOptions:{
      tabBarLabel:"Popular",
      tabBarOptions:{
        tabStyle:{backgroundColor:"#FFF"},
        labelStyle:{color:"#000"},
        indicatorStyle:{backgroundColor:"#000"}
      }
    }
  }
  
})

const AppStackNavigator=createStackNavigator(

  {
    Home:{
      screen:HomeScreen,
      navigationOptions:{headerShown:false}

    },
    AppTopNav:{
      screen:AppTopNavigation,
      navigationOptions:{
        headerBackTitle:null,
        headerTintColor:"#FFF",
        headerTitle:"Recommended Movies",
        headerStyle:{backgroundColor:"#D500F9"},
        headerTitleStyle:{color:"#FFF",font:"bold",fontSize:RFValue(18)}

      },

    }
  },

  { 
    initialRouteName:"Home"

}
 
 
)

const AppContainer = createAppContainer(AppStackNavigator)
