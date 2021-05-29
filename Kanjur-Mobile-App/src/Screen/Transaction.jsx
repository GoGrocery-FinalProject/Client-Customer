import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import { SliderBox } from 'react-native-image-slider-box'
import Card from '../Component/Card';

export default function Transaction({navigation}) {
  const banner = useSelector(state => state.banner)
  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {
      width: widthPercentageToDP('60%'),
      height: heightPercentageToDP('50%')
  },
  boxHeader: {
    width: 360,
    height: 204,
    backgroundColor: '#0095DA',
    marginBottom: heightPercentageToDP('1%')
  },
  keranjang: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: widthPercentageToDP('4.5%'),
    marginLeft: widthPercentageToDP('6%'),
    paddingVertical: heightPercentageToDP('1%')
  }
});
