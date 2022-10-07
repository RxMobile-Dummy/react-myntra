import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import RegisterScreen from './src/screens/Register';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigations';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    // <SafeAreaView>
    //   <View>
    //     {/* <Text>React myntra app</Text> */}
    //     <RegisterScreen />
    //   </View>
    // </SafeAreaView>
    <PaperProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
