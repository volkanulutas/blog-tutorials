import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from '../navigation/TabNavigation';
import DetailsScreen from "../container/Details"

const Stack = createStackNavigator();

function StackNavigaiton() {
    return (
        <Stack.Navigator initialRouteName="Home" 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4CB6ED',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} >
          <Stack.Screen name="Home" component={TabNavigation} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detaylar' }}   />
      </Stack.Navigator>
    );
  }
  export default StackNavigaiton;
