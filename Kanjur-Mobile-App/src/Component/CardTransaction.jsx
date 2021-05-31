import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconButton } from 'react-native-paper'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

export default function CardTransaction({navigation, transaction}) {

    function detailTransaksi() {
        console.log('ke screen detail')
        navigation.navigate('DetailRiwayat', {data: transaction})
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => detailTransaksi()}>
            <View style={styles.header}>
                <Text style={styles.price}>Transaksi: {transaction.transactionID}</Text>
                <Text style={styles.price}>{transaction.paymentStatus}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.detail}>Tanggal Transaksi: {transaction.transactionDate}</Text>
                <Text style={styles.detail}>Total Produk: {transaction.totalProduct} pcs</Text>
            </View>
            <View style={styles.totalContainer}>
                <IconButton
                    style={styles.avatar}
                    icon="cash"
                    color='#FB5533'
                    size={24}
                />
                <Text style={styles.price}>Total Pembayaran: Rp. {transaction.total},-</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: widthPercentageToDP('90%'),
        marginVertical: heightPercentageToDP('1%'),
        marginHorizontal: widthPercentageToDP('2%'),
        borderWidth: 2,
        borderColor: '#FFF',
        borderRadius: 8
        
    },
    header: {
        paddingHorizontal: widthPercentageToDP('5%'),
        paddingVertical: heightPercentageToDP('1%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    body: {
        paddingHorizontal: widthPercentageToDP('5%'),
        paddingVertical: heightPercentageToDP('2%'),
        flexDirection: 'column',
        backgroundColor: '#f4f4f4'
    },
    totalContainer: {
        paddingHorizontal: widthPercentageToDP('5%'),
        paddingVertical: heightPercentageToDP('1.2%'),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    price: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: widthPercentageToDP('4%'),
        color: '#FB5533',
    },
    detail: {
        color: 'black',
        fontSize: widthPercentageToDP('4%'),
        fontFamily: 'Roboto',
        paddingTop: heightPercentageToDP('1%')
    },
    avatar: {
        marginHorizontal: widthPercentageToDP('2%'),
        marginVertical: 0,
        paddingVertical: 0
    }
})