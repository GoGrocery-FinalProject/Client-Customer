import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function Home({navigation}) {
    const carts = useSelector(state => state.cart)
 
  return (
      <View style={styles.container}>
        <Text>Bissmillah! {JSON.stringify(carts)}</Text>
            <Button title="Login" onPress={() => navigation.navigate('Login')}></Button>
        <StatusBar style="auto" />
      </View>
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
