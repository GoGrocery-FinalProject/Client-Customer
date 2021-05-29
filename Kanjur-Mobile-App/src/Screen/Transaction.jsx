import React, { useState } from 'react'
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Platform, StatusBar } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import { SliderBox } from 'react-native-image-slider-box'
import Card from '../Component/Card';

export default function Transaction({navigation}) {
  const banner = useSelector(state => state.banner)
  const total = useState(0)

  return (
    <>
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <View style={styles.totalContainer}>
          <Text style={styles.total}>Total belanja:</Text>
          <Text style={styles.totalPrice}>Rp. {total},-</Text>
        </View>
      </View>
      <View style={styles.actionBox}>

      </View>
      <ScrollView>
        <SliderBox 
          images={banner}
          sliderBoxHeight={heightPercentageToDP('25%')}
          dotColor="#0095DA"
          autoplay
          circleLoop
        >
        </SliderBox>
        <View>
          <Text style={styles.keranjang}>Keranjang Belanja</Text>
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
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
    height: heightPercentageToDP('26%'),
    backgroundColor: '#0095DA',
    marginBottom: heightPercentageToDP('13%'),
    alignItems: 'center'
  },
  keranjang: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: widthPercentageToDP('4.5%'),
    marginLeft: widthPercentageToDP('6%'),
    paddingVertical: heightPercentageToDP('1%')
  },
  actionBox: {
    backgroundColor: '#fff',
    // shadowColor: 'black',
    position: 'absolute',
    height: heightPercentageToDP('20%'),
    width: widthPercentageToDP('90%'),
    left: widthPercentageToDP('5%'),
    top: heightPercentageToDP('17%'),
    borderRadius: 5
  },
  totalContainer: {
    marginTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    paddingVertical: heightPercentageToDP('4%'),
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginHorizontal: widthPercentageToDP('5%')
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
    width: widthPercentageToDP('42.5%'),
    textAlign: 'right',
    fontFamily: 'Roboto',
    fontSize: widthPercentageToDP('7%'),
    fontWeight: 'bold',
    color: '#fff'
  }
});
