import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import CardTransaction from '../Component/CardTransaction';
import ScreenError from './Error';
import ScreenLoading from './Loading';

export default function History({navigation}) {

  const transactions = useSelector(state => state.transaction)
  const loading = useSelector(state => state.loading)
  const error = useSelector(state => state.error)

  if (loading) {
    return <ScreenLoading />
  }

  if (error) {
    return <ScreenError />
  }
 
  return (
    <View style={styles.container}>
      <ScrollView>
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
