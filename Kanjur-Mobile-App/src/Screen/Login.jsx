import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Button } from 'react-native-paper';

export default function Login({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Login</Text> */}
            <Image style={styles.logo} source={{ uri: 'https://library.kissclipart.com/20180904/ege/kissclipart-logo-blibli-clipart-blibli-com-logo-indonesia-8a27c76836cbc048.jpg'}} />
            <TextInput 
                style={styles.input} 
                placeholder="Email / No Telepon"
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
            <Button color="#fff" mode="flat" style={styles.button} onPress={() => console.log('login')}>Login</Button>
            <View style={styles.line} />
            <Text style={styles.text}>Tidak memiliki akun ?</Text>
            <Button color="#fff" mode="flat" style={styles.button} onPress={() => navigation.navigate('Register')}>Register Disini</Button>
            <Button color="#fff" icon="google" mode="flat" style={styles.buttonGoogle} onPress={() => console.log('google login')}>Login dengan Google</Button>

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
