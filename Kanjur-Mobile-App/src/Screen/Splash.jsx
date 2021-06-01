import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { checkToken } from '../../asyncStorage';
import { useSelector } from 'react-redux';

export default function Splash({navigation}) {
  const logo = useSelector(state => state.logo)
  useEffect(() => {
      setTimeout(() => {
          checkToken(navigation)
      }, 3000)
  })

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{uri: logo}} />
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
    width: widthPercentageToDP('50%'),
    height: heightPercentageToDP('10%')
  }
});
