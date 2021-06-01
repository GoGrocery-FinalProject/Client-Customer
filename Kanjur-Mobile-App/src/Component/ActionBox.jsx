import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { removeBarcode } from '../../asyncStorage';
import { deleteCart, getTransaction, paymentMidtrans } from '../../store/actions';
import ButtonView from '../Component/Button'

export default function ActionBox({navigation}) {
    const [shadowOffsetWidth, setShadowOffsetWidth] = useState(8);
    const [shadowOffsetHeight, setShadowOffsetHeight] = useState(6);
    const [shadowRadius, setShadowRadius] = useState(25);
    const [shadowOpacity, setShadowOpacity] = useState(1);
    const total = useSelector(state => state.total)
    const carts = useSelector(state => state.cart)
    const dispatch = useDispatch()
    
    function ScanMethod() {
        navigation.navigate('ScanProduct')
    }

    function payment() {
        console.log('bayar');
        removeBarcode()
        dispatch(paymentMidtrans(carts, total, navigation))
    }

    function history() {
        console.log('history');
        dispatch(getTransaction())
        navigation.navigate('Riwayat')
    }

    function checkout() {
        dispatch(deleteCart())
        removeBarcode()
        navigation.navigate('CheckIn')
    }

    return (
        <View style={[
        styles.actionBox,
            {
            shadowOffset: {
                width: shadowOffsetWidth,
                height: -shadowOffsetHeight
            },
            shadowOpacity,
            shadowRadius
            }
        ]}>
            <ButtonView method={ScanMethod} icon="barcode-scan" title="Scan"/>
            <ButtonView method={payment} icon="cash" title="Bayar"/>
            <ButtonView method={history} icon="history" title="Riwayat"/>
            <ButtonView method={checkout} icon="logout" title="Keluar"/>
        </View>
    );
}

const styles = StyleSheet.create({  
  actionBox: {
    backgroundColor: '#fff',
    shadowColor: 'black',
    position: 'absolute',
    height: heightPercentageToDP('16%'),
    width: widthPercentageToDP('90%'),
    left: widthPercentageToDP('5%'),
    top: heightPercentageToDP('21%'),
    borderRadius: 5,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-evenly'
  },
  button: {

  },
  icon : {
    margin: 0,
    padding: 0
  },
  buttonText: {
      color: '#0095DA',
      fontFamily: 'Roboto',
      fontSize: widthPercentageToDP('4%'),
      textAlign: 'center',
      padding: 0,
      margin: 0
  }
});
