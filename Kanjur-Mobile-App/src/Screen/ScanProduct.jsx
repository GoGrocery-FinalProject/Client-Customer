import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByBarcode, setFixedCart, setLoading } from '../../store/actions';

export default function ScanProduct({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const dispatch = useDispatch()
  const carts = useSelector(state => state.cart)

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    let flag = true
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].barcode_number === data) {
        dispatch(setLoading(true))
        let dupecart = [...carts]
        dupecart[i].quantity++
        dispatch(setFixedCart(dupecart))
        navigation.navigate('Transaction')
        flag = false
      }
    }
    if (flag) {
      dispatch(getProductByBarcode(data))
    }
    navigation.navigate('Transaction')
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
