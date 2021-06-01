import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Platform, StatusBar } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Slider from '../Component/Slider'
import Card from '../Component/Card';
import ActionBox from '../Component/ActionBox';
import StatusBarLight from '../Component/StatusBarLight'
import { Avatar, IconButton } from 'react-native-paper';
import { clearAsyncStorage, getUsername } from '../../asyncStorage';
import { useDispatch, useSelector } from 'react-redux';
import convertRp from '../../helpers/convertRp';
import { deleteCart, setTotal } from '../../store/actions';

export default function Transaction({navigation}) {
  const total = useSelector(state => state.total)
  const username = getUsername._W
  const carts = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    let subTotal = 0
    for (let i = 0; i < carts.length; i++) {
      subTotal += (carts[i].price * carts[i].quantity)
    }
    dispatch(setTotal(subTotal))
  })

  function clearCart() {
    dispatch(deleteCart())
  }

  return (
    <>
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <View style={styles.userContainer}>
          <Avatar.Icon style={styles.avatar} icon='account-outline' size={24} color='#0095DA' backgroundColor='#fff' />
          <Text style={styles.user}>{username}</Text>
          <IconButton icon="power" size={24} color="yellow" onPress={() => clearAsyncStorage(navigation)} />
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.total}>Total belanja:</Text>
          <Text style={styles.totalPrice}>{convertRp(total)}</Text>
        </View>
      </View>
      <ActionBox navigation={navigation}/>
      <ScrollView>
        <Slider />
        <View>
          <View style={styles.containerTitleCart}>
            <Text style={styles.keranjang}>Keranjang Belanja</Text>
            <IconButton icon="delete" size={widthPercentageToDP('5%')} color="red" onPress={() => clearCart()} />
          </View>
          {
            carts.map((el, idx) => {
              return <Card key={el.id} data={el} idx={idx}/>
            })
          }
        </View>
      </ScrollView>
      <StatusBarLight />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4'
  },
  boxHeader: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('29%'),
    backgroundColor: '#0095DA',
    marginBottom: heightPercentageToDP('9.5%'),
  },
  keranjang: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: widthPercentageToDP('4.5%'),
    paddingVertical: heightPercentageToDP('1%')
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginHorizontal: widthPercentageToDP('5%')
  },
  userContainer: {
    marginTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  total: {
    width: widthPercentageToDP('42.5%'),
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontSize: widthPercentageToDP('3%'),
    fontWeight: 'bold',
    color: '#fff'
  },
  totalPrice: {
    textAlign: 'right',
    fontFamily: 'Roboto',
    fontSize: widthPercentageToDP('7%'),
    fontWeight: 'bold',
    color: '#fff'
  },
  containerTitleCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: widthPercentageToDP('6%'),
  },
  user: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: widthPercentageToDP('4%'),
    marginHorizontal: widthPercentageToDP('2%')
  },
  avatar: {
  }
});
