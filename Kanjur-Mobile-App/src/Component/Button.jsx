import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default function ButtonView({method, icon, title}) {
    
  return (

    <TouchableOpacity style={styles.button} onPress={() => method()}>
        <IconButton
            style={styles.icon}
            icon={icon}
            color='#0095DA'
            size={widthPercentageToDP('10%')}
        />
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({  
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon : {
    margin: 0,
    padding: 0
  },
  buttonText: {
      color: '#0095DA',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: widthPercentageToDP('4%'),
      padding: 0,
      margin: 0
  }
});
