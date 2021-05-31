import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/Screen/Home';
import Login from './src/Screen/Login';
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store';
import Splash from './src/Screen/Splash';
import Register from './src/Screen/Register';
import Transaction from './src/Screen/Transaction';
import CheckIn from './src/Screen/CheckIn';
import ScanProduct from './src/Screen/ScanProduct';
import History from './src/Screen/History';
import HistoryDetail from './src/Screen/HistoryDetail';

export default function App() {
  const Stack = createStackNavigator()

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerStyle: {backgroundColor: '#0095DA'}}}/>
          <Stack.Screen name="Register" component={Register} options={{ headerStyle: {backgroundColor: '#FB5533'}}} />
          <Stack.Screen name="CheckIn" component={CheckIn} options={{ headerShown: false }} />
          <Stack.Screen name="Transaction" component={Transaction} options={{ headerShown: false }} />
          <Stack.Screen name="ScanProduct" component={ScanProduct} options={{ headerStyle: {backgroundColor: '#0095DA'}}}/>
          <Stack.Screen name="Riwayat" component={History} options={{ headerStyle: {backgroundColor: '#FB5533'}}} />
          <Stack.Screen name="DetailRiwayat" component={HistoryDetail} options={{ headerStyle: {backgroundColor: '#0095DA'}}} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
