import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import CardTransaktion from '../Component/CardTransaktion';

export default function History({navigation}) {
 
  return (
      <View style={styles.container}>
          <ScrollView>
            <CardTransaktion />
            <CardTransaktion />
            <CardTransaktion />
            <CardTransaktion />
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
