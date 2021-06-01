import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import convertRp from '../../helpers/convertRp';

export default function CheckOut({navigation, route}) {
  const {link, order_id, total} = route.params

  function detailBelanja() {
    console.log('detailnya');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: 'https://library.kissclipart.com/20180904/ege/kissclipart-logo-blibli-clipart-blibli-com-logo-indonesia-8a27c76836cbc048.jpg'}} />
      <Text style={styles.title}>Terima Kasih sudah berbelanja di Kanjur :)</Text>
      <Text style={styles.text}>Anda telah berbelanja sebanyak :</Text>
      <Text style={styles.price}>{convertRp(total)}</Text>
      <Button style={styles.button} color='#fff' onPress={() => detailBelanja()}>Lihat Detail belanja</Button>
      <Button style={styles.button} color='#fff' onPress={() => navigation.navigate('Midtrans', {link: link, order_id: order_id})}>Kemenu pembayaran</Button>
      <Button style={styles.button} color='#fff' onPress={() => navigation.replace('CheckIn')}>Belanja Lagi Yuk</Button>
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
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: widthPercentageToDP('10%'),
    marginVertical: heightPercentageToDP('5%')
  },
  price: {
    color: "#fff",
    fontFamily: 'Roboto',
    fontSize: widthPercentageToDP('10%'),
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: widthPercentageToDP('10%'),
    marginBottom: heightPercentageToDP('5%'),
  },
  text: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: widthPercentageToDP('3.5%'),
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FB5533',
    height: heightPercentageToDP('5%'),
    width: widthPercentageToDP('60%'),
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: heightPercentageToDP('2%'),
  }
});
