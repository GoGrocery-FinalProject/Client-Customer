import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Avatar, Button } from 'react-native-paper'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

export default function Card() {
    return (
        <View style={styles.container}>
            <Avatar.Image style={styles.card} size={widthPercentageToDP('20%')} source={{ uri: 'https://awsimages.detik.net.id/community/media/visual/2020/09/26/snack-jepang-yang-ditawarkan-via-jastip-4.png?w=448'}} />
            <View style={styles.boxName}>
                <Text style={styles.title}>KitKat Ocean Salt (Japan Snack)</Text>
                <Text style={styles.detail}>100 gr</Text>
            </View>
            <View style={styles.boxPrice}>
                <Text style={styles.price}>Rp.5.000,-</Text>
                <View style={styles.buttonQty}>
                    <TouchableOpacity style={styles.plusminus}>
                        <Text style={styles.qtyText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.plusminus}>
                        <Text style={styles.qtyText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.plusminus}>
                        <Text style={styles.qtyText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: heightPercentageToDP('15%'),
        alignItems: 'center',
        paddingHorizontal: widthPercentageToDP('5%'),
        flexDirection: 'row'
    },
    boxName: {
        marginHorizontal: widthPercentageToDP('3%'),
        width: widthPercentageToDP('38%'),
        flexDirection: 'column'
    },
    boxPrice: {
        // marginHorizontal: widthPercentageToDP('5%'),
        // width: widthPercentageToDP('20%'),
        flexDirection: 'column'
    },
    plusminus: {
        backgroundColor: '#fff',
        paddingHorizontal: widthPercentageToDP('3%'),
        borderColor: '#d4d4d4',
        fontWeight: 'bold',
        borderWidth: 1,
        marginVertical: heightPercentageToDP('1%'),
        paddingVertical: widthPercentageToDP('1%')
    },
    buttonQty: {
        flexDirection: 'row'
    },
    qtyText: {
        fontFamily: 'Roboto',
        fontSize: widthPercentageToDP('4%'),
        fontWeight: 'bold'
    },
    price: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: widthPercentageToDP('4.5%'),
        color: '#FB5533',
        textAlign: 'right'
    },
    title: {
        fontWeight: 'bold',
        fontSize: widthPercentageToDP('4%'),
        fontFamily: 'Roboto'
    },
    detail: {
        color: '#a4a4a4',
        fontWeight: 'bold',
        fontSize: widthPercentageToDP('4%'),
        fontFamily: 'Roboto',
        paddingTop: heightPercentageToDP('1%')
    }
})