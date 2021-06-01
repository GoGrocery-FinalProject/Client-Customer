import axios from 'axios';
import { getToken, setName, setToken } from '../asyncStorage';
import { SET_CART, SET_ERROR, SET_LOADING, SET_USER, DELETE_CART } from './constants'

const baseURL ='https://kanjur-test.herokuapp.com/'

export function setCart(payload) {
    return ({type: SET_CART, payload})
}

export function deleteCart(payload) {
    return ({type: DELETE_CART, payload})
}

export function setLoading(payload) {
    return ({type: SET_LOADING, payload})
}

export function setError(payload) {
    return ({type: SET_ERROR, payload})
}

export function setUser(payload) {
    return ({type: SET_USER, payload})
}

export function postRegister(data) {
    return function (dispatch) {
        console.log('masuk')
        dispatch(setLoading(true))
        axios({
            method: 'POST',
            url: baseURL + 'register',
            data: data
        })
        .then(data => {
            dispatch(setUser(data.data))
            alert('Register berhasil')
        })
        .catch(err => {
            console.log(err);
            alert('Register Gagal')
        })
        .finally(() => {
            dispatch(setLoading(false))
        })
    }
}

export function postLogin(data, navigation) {
    console.log(data, 'ini data login');
    return function (dispatch) {
        dispatch(setLoading(true))
        axios({
            method: 'POST',
            url: baseURL + 'login',
            data: data
        })
        .then(data => {
            setToken(data.data.token)
            setName(data.data.name)
            alert('Login berhasil')
            navigation.navigate('CheckIn')
        })
        .catch(err => {
            console.log(err, 'error post Login');
            alert('Login gagal')
        })
        .finally(() => {
            dispatch(setLoading(false))
        })
    }
}

export function getProductByBarcode(barcode) {
    return function (dispatch) {
        dispatch(setLoading(true))
        axios({
            method: 'GET',
            url: baseURL + 'products/' + barcode,
            headers: {
                token: getToken._W
            } 
        })
        .then(data => {
            data.data.qty = 1
            console.log(data.data, '<<<<<<<<<<<<berhasil hit')
            dispatch(setCart(data.data))
            alert(`Produk berhasil ditambahkan ke keranjang`);
        })
        .catch(err => {
            console.log(err, 'error get product by barcode');
            alert(`Gagal tambahkan product`);
        })
        .finally(() => {
            dispatch(setLoading(false))
        })
    }
}