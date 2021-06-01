import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import CardTransaction from '../Component/CardTransaction';

export default function History({navigation}) {
    // const transaction = {
    //     transactionID : 'ABCDEF12345',
    //     transactionDate : '30 Mei 2021',
    //     paymentStatus : 'Dibayar',
    //     totalProduct : 10,
    //     total : 75000
    // }

    const transactions = useSelector(state => state.transaction)
 
  return (
      <View style={styles.container}>
          <ScrollView>
        <Text>{JSON.stringify(transactions, null, 2)}</Text>
            {
              transactions.map(transaction => {
                return <CardTransaction key={transaction.id} navigation={navigation} transaction={transaction}/>
              })
            }
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
