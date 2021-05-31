import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import {postRegister} from '../../store/actions'

export default function Register({navigation, route}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const logo = useSelector(state => state.logo)
  const dispatch = useDispatch()

  function register(data) {
    dispatch(postRegister(data))
    // console.log(data, 'data');
    navigation.navigate('Home')
  }

  return (
      <View style={styles.container}>
        <Image style={styles.logo} source={{ uri: logo}} />
        <TextInput 
            style={styles.input} 
            placeholder="Nama"
            onChangeText={setName} 
            value={name} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="No Telepon"
          keyboardType='number-pad'
          onChangeText={setPhone} 
          value={phone}  
        />
        <TextInput 
            style={styles.input} 
            placeholder="Email"
            keyboardType='email-address'
            onChangeText={setEmail} 
            value={email} 
        />
        <TextInput 
            style={styles.input} 
            placeholder="Password"
            onChangeText={setPassword} 
            secureTextEntry
            value={password}
        />
        <Button color="#fff" mode="flat" style={styles.button} onPress={() => register({name, email, phone_number: phone, password})}>Register</Button>
        <View style={styles.line} />
        <Button color="#fff" icon="google" mode="flat" style={styles.buttonGoogle} onPress={() => navigation.navigate('CheckIn')}>Masuk dengan Google</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: widthPercentageToDP('7%'),
    color: '#FB5533'
  },
  input: {
      backgroundColor: '#d4d4d4',
      color: 'black',
      height: heightPercentageToDP('8%'),
      width: widthPercentageToDP('70%'),
      borderRadius: 5,
      marginVertical: heightPercentageToDP('1.5%'),
      paddingHorizontal: widthPercentageToDP('4%')
  },
  button: {
    backgroundColor: '#FB5533',
    height: heightPercentageToDP('8%'),
    width: widthPercentageToDP('70%'),
    borderRadius: 5,
    justifyContent: 'center',
    marginVertical: heightPercentageToDP('1.5%'),
  },
  line: {
    width: widthPercentageToDP('70%'),
    height: 1, 
    backgroundColor: '#c4c4c4',
    marginVertical: heightPercentageToDP('1.5%')
  },
  text: {
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      fontSize: widthPercentageToDP('3.5%'),
      marginVertical: heightPercentageToDP('1.5%')
  },
  buttonGoogle: {
      backgroundColor: '#0095DA',
      height: heightPercentageToDP('8%'),
      width: widthPercentageToDP('70%'),
      borderRadius: 5,
      justifyContent: 'center',
      marginVertical: heightPercentageToDP('1.5%'),
  },
  logo: {
      width: widthPercentageToDP('50%'),
      height: heightPercentageToDP('10%'),
      marginBottom: heightPercentageToDP('2%')
  }
});
