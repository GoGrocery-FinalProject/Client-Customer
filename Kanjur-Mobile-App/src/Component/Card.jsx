import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Avatar, Button, TextInput } from 'react-native-paper'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { useDispatch } from 'react-redux'
import convertRp from '../../helpers/convertRp'
import { deleteCartByIndex, setLoading } from '../../store/actions'

export default function Card({data, idx}) {
    const [qty, setQty] = useState(data.quantity)
    const dispatch = useDispatch()

    function plus() {
        dispatch(setLoading(true))
        data.quantity++
        if (data.quantity === 0) {
            console.log('ganti');
            dispatch(deleteCartByIndex(idx))
        } else {
            console.log(data.quantity, 'after add');
            setQty(data.quantity)
        } 
    }

    function minus() {
        dispatch(setLoading(true))
        data.quantity--
        if (data.quantity === 0) {
            console.log('ganti');
            dispatch(deleteCartByIndex(idx))
        } else {
            console.log(data.quantity, 'after min');
            setQty(data.quantity)
        } 
    }

    function onChangeQty(value) {
        dispatch(setLoading(true))
        console.log(value ,'/////////', idx);
        if (+value === 0) {
            console.log('ganti');
            dispatch(deleteCartByIndex(idx))
        } else {
            data.quantity = value
            setQty(value)
        }
    }

    return (
        <View style={styles.container}>
            <Avatar.Image style={styles.card} size={widthPercentageToDP('20%')} source={{ uri: data.image_url}} />
            <View style={styles.boxName}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.detail}>{data.description}</Text>
            </View>
            <View style={styles.boxPrice}>
                <Text style={styles.price}>{convertRp(data.price)}</Text>
                <View style={styles.buttonQty}>
                    <TouchableOpacity style={styles.plusminus} onPress={() => minus()}>
                        <Text style={styles.qtyText}>-</Text>
                    </TouchableOpacity>
                    <TextInput
                        width={widthPercentageToDP('10%')}
                        dense={true}
                        keyboardType='number-pad'
                        paddingVertical={0}
                        mode='outlined'
                        style={styles.formInput}
                        value={qty.toString()}
                        onChangeText={qty => onChangeQty(qty)}
                    />
                    <TouchableOpacity style={styles.plusminus} onPress={() => plus()}>
                        <Text style={styles.qtyText}>+</Text>
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
        // borderColor: '#d4d4d4',
        fontWeight: 'bold',
        // borderWidth: 1,
        marginVertical: heightPercentageToDP('1%'),
        paddingVertical: widthPercentageToDP('1%')
    },
    buttonQty: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    qtyText: {
        fontFamily: 'Roboto',
        fontSize: widthPercentageToDP('5%'),
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