import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconButton } from 'react-native-paper'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import convertRp from '../../helpers/convertRp'

export default function CardTransaction({navigation, transaction}) {

    function detailTransaksi() {
        console.log('ke screen detail')
        navigation.navigate('DetailRiwayat', {data: transaction})
    }

    function countQty() {
        const products = JSON.parse(transaction.products)
        let totalQty = 0
        for (let i = 0; i< products.length; i++) {
            totalQty += products[i].quantity
        }
        return totalQty
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => detailTransaksi()}>
            <View style={styles.header}>
                <Text style={styles.price}>{transaction.order_id}</Text>
                <Text style={styles.price}>payment status</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.detail}>Tanggal Transaksi: {transaction.createdAt.split('T')[0]}</Text>
                <Text style={styles.detail}>Waktu Transaksi: {transaction.createdAt.split('T')[1].split('.')[0]}</Text>
                <Text style={styles.detail}>Total Produk: {countQty()} pcs</Text>
            </View>
            <View style={styles.totalContainer}>
                <IconButton
                    style={styles.avatar}
                    icon="cash"
                    color='#FB5533'
                    size={24}
                />
                <Text style={styles.price}>Total Pembayaran: {convertRp(transaction.totalPrice)}</Text>
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
        borderRadius: 8,       
    },
    header: {
        paddingHorizontal: widthPercentageToDP('5%'),
        paddingVertical: heightPercentageToDP('1%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    body: {
        paddingHorizontal: widthPercentageToDP('5%'),
        paddingVertical: heightPercentageToDP('1%'),
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
        fontSize: widthPercentageToDP('3%'),
        fontFamily: 'Roboto',
        // paddingTop: heightPercentageToDP('1%')
    },
    avatar: {
        marginHorizontal: widthPercentageToDP('2%'),
        marginVertical: 0,
        paddingVertical: 0
    }
})