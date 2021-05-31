import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default function CheckOut({navigation}) {

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: 'https://library.kissclipart.com/20180904/ege/kissclipart-logo-blibli-clipart-blibli-com-logo-indonesia-8a27c76836cbc048.jpg'}} />
      <Text style={styles.title}>Ini Halaman setelah bayar, diisi apaan yak. mikir dulu</Text>
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
    height: heightPercentageToDP('10%'),
    marginBottom: heightPercentageToDP('4%')
  },
  scanner: {
    marginVertical: heightPercentageToDP('4%'),
    width: widthPercentageToDP('60%'),
    height: heightPercentageToDP('50%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxScanner: {
    marginVertical: heightPercentageToDP('4%'),
    width: widthPercentageToDP('60%'),
    height: heightPercentageToDP('50%'),
    backgroundColor: '#FB5533',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scannerFail: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: widthPercentageToDP('4%')
  },
  title: {
    color: "#fff",
    fontFamily: 'Roboto',
    fontSize: widthPercentageToDP('6%'),
    fontWeight: 'bold'
  },
  subTitle: {
    color: "#fff",
    fontFamily: 'Roboto',
    fontSize: widthPercentageToDP('4.5%')
  },
  text: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: widthPercentageToDP('3%'),
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#FB5533',
    height: heightPercentageToDP('5%'),
    width: widthPercentageToDP('60%'),
    borderRadius: 5,
    justifyContent: 'center',
    marginVertical: heightPercentageToDP('1.5%'),
  }
});
