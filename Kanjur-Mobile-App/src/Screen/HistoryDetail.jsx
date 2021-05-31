import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Platform, StatusBar } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Slider from '../Component/Slider'
import CardHistory from '../Component/CardHistory';
import ActionBox from '../Component/ActionBox';
import StatusBarLight from '../Component/StatusBarLight'
import { Avatar, IconButton } from 'react-native-paper';
import { clearAsyncStorage, getUsername } from '../../asyncStorage';

export default function HistoryDetail({navigation, route}) {
    const {transactionID, transactionDate, paymentStatus,totalProduct, total} = route.params.data

    return (
    <>
    <View style={styles.container}>
        <ScrollView style={styles.scrolling}>
            <View>
                <View style={styles.containerTitleCart}>
                    <Text style={styles.keranjang}>Transaksi: {transactionID}</Text>
            </View>
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
            </View>
            <View style={styles.totalContainer}>
                <IconButton
                    style={styles.avatar}
                    icon="cash"
                    color='#FB5533'
                    size={24}
                />
                <Text style={styles.price}>Total Pembayaran: Rp. {total},-</Text>
            </View>
            <Text style={styles.date}>Tanggal Transaksi: {transactionDate}</Text>
            <Text style={styles.status}>Status Pembayaran: {paymentStatus}</Text>
        </ScrollView>
        <StatusBarLight />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  keranjang: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: widthPercentageToDP('4.5%'),
    paddingVertical: heightPercentageToDP('1%')
  },
  containerTitleCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: widthPercentageToDP('6%'),
  },
  totalContainer: {
    paddingHorizontal: widthPercentageToDP('5%'),
    paddingVertical: heightPercentageToDP('1.2%'),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
    price: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: widthPercentageToDP('4.5%'),
        color: 'black',
  },
  avatar: {
    marginHorizontal: widthPercentageToDP('2%'),
    marginVertical: 0,
    paddingVertical: 0
  },
  date: {
      textAlign: 'left',
      paddingHorizontal: heightPercentageToDP('3%')
  },
  status: {
    textAlign: 'left',
    paddingHorizontal: heightPercentageToDP('3%'),
    marginBottom: heightPercentageToDP('5%')
}
});
