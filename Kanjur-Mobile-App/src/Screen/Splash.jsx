import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Splash({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 5000)
    })
    return (
        <View style={styles.container}>
        <Text>Nnati disini ada logo App / gambar buat splash</Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0095DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
