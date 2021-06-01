import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { WebView } from 'react-native-webview'

export default function MidtransWebView({ navigation, route }) {
	return (
		<>
		<WebView
			originWhitelist={['*']}
			source={{ uri: route.params.link }}
			style={{ marginTop: 20 }}
		/>
		<Button mode="text" style={styles.button} color='#fff' onPress={() => navigation.navigate('CheckOut', {link: route.params.link, order_id: route.params.order_id, total: route.params.total})}>Kembali ke Aplikasi</Button>
		</>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#0095DA',
		height: heightPercentageToDP('7%'),
		width: widthPercentageToDP('100%'),
		justifyContent: 'center',
		alignItems: 'center'
	  }
})