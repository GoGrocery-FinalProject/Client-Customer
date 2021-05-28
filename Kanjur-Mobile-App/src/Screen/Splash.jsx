import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default function Splash({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 3000)
    })
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{uri: 'https://image.freepik.com/free-vector/click-collect-detailed-logo-sign_23-2148789056.jpg'}} />
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
  logo: {
      width: widthPercentageToDP('60%'),
      height: heightPercentageToDP('50%')
  }
});
