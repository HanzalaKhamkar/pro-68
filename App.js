import React from "react";
import {StyleSheet, Text, View} from "react-navigation"
import {createAppContainer} from "react-navigation";
import BookTransactionScreen from "./Screens/BookTransactionScreen";
import SearchScreen from "./Screens/SearchScreen";
import {createBottomTabNavigator} from "react-navigation-tabs"

export default class App extends React.Component {

  render(){
    return <AppContainer/>;
  }
}

const TabNavigator = createBottomTabNavigator ({
  Transaction : {screen: BookTransactionScreen},
  Search : {screen: SearchScreen}
});

const AppContainer = createAppContainer(TabNavigator);