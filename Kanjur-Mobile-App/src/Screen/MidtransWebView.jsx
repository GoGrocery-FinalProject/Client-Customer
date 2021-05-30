import * as React from 'react'
import { WebView } from 'react-native-webview'

export default function MidtransWebView({ route }) {
	return (
		<WebView
			originWhitelist={['*']}
			source={{ uri: route.params.link }}
			style={{ marginTop: 20 }}
		/>
	)
}
