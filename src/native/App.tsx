import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import RegisterScreen from './src/screens/Register';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigations';
import {Provider as PaperProvider} from 'react-native-paper';
import ForgetPassword from './src/screens/ForgetPassword';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import CardScreen from './src/screens/Cards';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
