import React from 'react'
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import { SliderBox } from 'react-native-image-slider-box'

export default function Slider({navigation}) {
  const banner = useSelector(state => state.banner)

  return (
    <SliderBox 
        images={banner}
        sliderBoxHeight={heightPercentageToDP('25%')}
        dotColor="#0095DA"
        autoplay
        circleLoop
    >
    </SliderBox>
  );
}

