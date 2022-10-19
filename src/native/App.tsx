import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigations';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { persistor, store } from 'core';
import Toast, { ErrorToast } from 'react-native-toast-message';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  const toastConfig = {
    error: (props: any) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 13,
        }}
        text1NumberOfLines={3}
      />
    ),
  };
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </PaperProvider>
        <Toast config={toastConfig} />
      </PersistGate>
    </Provider>
  );
};

export default App;
