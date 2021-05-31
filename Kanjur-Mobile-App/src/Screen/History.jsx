import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import CardTransaction from '../Component/CardTransaction';

export default function History({navigation}) {
    const transaction = {
        transactionID : 'ABCDEF12345',
        transactionDate : '30 Mei 2021',
        paymentStatus : 'Dibayar',
        totalProduct : 10,
        total : 75000
    }
 
  return (
      <View style={styles.container}>
          <ScrollView>
            <CardTransaction navigation={navigation} transaction={transaction}/>
            <CardTransaction navigation={navigation} transaction={transaction}/>
            <CardTransaction navigation={navigation} transaction={transaction}/>
            <CardTransaction navigation={navigation} transaction={transaction}/>
          </ScrollView>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0095DA',
    alignItems: 'center',
    paddingVertical: heightPercentageToDP('1%')
  },
});
