import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation'

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
};
export default App;