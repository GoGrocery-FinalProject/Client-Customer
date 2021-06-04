import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { checkToken } from '../../asyncStorage';

export default function Splash({navigation}) {

  useEffect(() => {
    setTimeout(() => {
      checkToken(navigation)
    }, 3000)
  })

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo-horizontal-dark-transparan.png')} />
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
    width: widthPercentageToDP('70%'),
    height: heightPercentageToDP('10%')
  }
});
