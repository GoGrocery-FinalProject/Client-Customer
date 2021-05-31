import React, { useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import { Avatar, Button } from 'react-native-paper'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import convertRp from '../../helpers/convertRp'

export default function Card({data, idx}) {
    useEffect(() => {
        console.log('use Effect');
    }, [data.qty])

    function plus() {
        console.log(data.qty);
        console.log(idx, 'ini index');
        data.qty++
        console.log(data.qty, 'after add');
    }

    function minus() {
        console.log(data.qty);
        console.log(idx, 'ini index');
        data.qty--
        console.log(data.qty, 'after min');
    }

    //funsinya masih ngacoooo
    function onChangeQty(value) {
        data.qty = value
        console.log(data.qty);
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
                    <TouchableOpacity style={styles.plusminus}>
                        {/* <TextInput style={styles.qtyText}>{data.qty}</TextInput> */}
                        <TextInput
        style={styles.qtyText}
        onChangeText={onChangeQty}
        value={data.qty.toString()}
        // placeholder={data.qty}
      />
                    </TouchableOpacity>
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