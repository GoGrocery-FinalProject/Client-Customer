import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default function Home({navigation}) {
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/bannerHome.png')} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Selamat datang di</Text>
        <Text style={styles.titleBottom}>Go Grocery</Text>
        <Text style={styles.text}>Go Grocery adalah swalayan modern yang menggunakan layanan otomatisasi untuk pembayaran di mana pelanggan dapat membeli barang apa pun di toko tanpa kontak dengan orang lain sama sekali. Ini menggunakan pemindaian barcode dan pembayaran elektronik untuk prosesnya.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button color="white" style={styles.login} mode="flat" onPress={() => navigation.navigate('Login')}>Login</Button>
        <Button color="white" style={styles.register} mode="flat" onPress={() => navigation.navigate('Register')}>Register</Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('55%')
  },
  textContainer: {
    marginHorizontal: widthPercentageToDP('10%'),
    marginVertical: heightPercentageToDP('3%')
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: widthPercentageToDP('8%'),
    color: '#0095DA',
  },
  titleBottom: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: widthPercentageToDP('8%'),
    color: '#0095DA',
    marginBottom: heightPercentageToDP('2%')
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: widthPercentageToDP('3.5%')
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  login: {
    backgroundColor: '#0095DA',
    marginTop: heightPercentageToDP('3%'),
    marginHorizontal: widthPercentageToDP('5%')
  },
  register: {
    backgroundColor: '#FB5533',
    marginTop: heightPercentageToDP('3%'),
    marginHorizontal: widthPercentageToDP('5%')
  }
});
