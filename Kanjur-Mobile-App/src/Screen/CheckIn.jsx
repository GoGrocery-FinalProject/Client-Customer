import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { getUsername, setBarcode } from '../../asyncStorage';

export default function CheckIn({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const username = getUsername._W

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(data, '======datanya');
    if (data === 'https://me-qr.com/549273') {
      setBarcode(data)
      navigation.navigate('Transaction')
      console.log('masuk');
    } else {
      alert('Barcode yang anda scan tidak terdaftar dalam Sistem kami')
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: 'https://library.kissclipart.com/20180904/ege/kissclipart-logo-blibli-clipart-blibli-com-logo-indonesia-8a27c76836cbc048.jpg'}} />
      <Text style={styles.title}>Hallo {username},</Text>
      <Text style={styles.subTitle}>Selamat berbelanja di Kanjur!</Text>

        {
          !hasPermission? <View style={styles.boxScanner}><Text style={styles.scannerFail}>Requesting for camera permission</Text></View> : <BarCodeScanner
          style={styles.scanner}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
        }
      
      {scanned && <Button style={styles.button} color='#fff' onPress={() => setScanned(false)}>Scan Ulang</Button>}

      <Text style={styles.text}>Scan barcode kantin disini untuk memulai belanja</Text>
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
