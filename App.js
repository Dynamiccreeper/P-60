import * as React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from './screen/HomeScreen'
import SummaryScreen from './screen/SummaryScreen'

export default function App() {
  return (
   <AppContainer/>
  );
}



var SwitchNavigator= createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen
})
var AppContainer=createAppContainer(SwitchNavigator)