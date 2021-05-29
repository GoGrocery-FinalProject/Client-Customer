import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default function CheckIn() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: 'https://library.kissclipart.com/20180904/ege/kissclipart-logo-blibli-clipart-blibli-com-logo-indonesia-8a27c76836cbc048.jpg'}} />
      <Text style={styles.title}>Hallo Customer,</Text>
      <Text style={styles.subTitle}>Selamat berbelanja di Kanjur!</Text>

        {
          !hasPermission? <View style={styles.boxScanner}><Text style={styles.scannerFail}>Requesting for camera permission</Text></View> : <BarCodeScanner
          style={styles.scanner}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
        }
      
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

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
  }
});
