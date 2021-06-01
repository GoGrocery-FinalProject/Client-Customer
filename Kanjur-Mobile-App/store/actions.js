import axios from 'axios';
import { getToken, getUserId, getUsername, setName, setToken, setUserId } from '../asyncStorage';
import { SET_CART, SET_ERROR, SET_LOADING, SET_USER, DELETE_CART, SET_TOTAL, SET_TRANSACTION } from './constants'

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

export function setTotal(payload) {
    return ({type: SET_TOTAL, payload})
}

export function setTransaction(payload) {
    return ({type: SET_TRANSACTION, payload})
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
            setUserId(data.data.userId.toString())
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
            let product = {
                id: data.data.id,
                name: data.data.name,
                image_url: data.data.image_url,
                description: data.data.description,
                price: data.data.price,
                quantity: 1
            }
            console.log(data.data, '<<<<<<<<<<<<berhasil hit')
            dispatch(setCart(product))
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

export function paymentMidtrans(carts, total, navigation) {
    let data = {
        userId: getUserId._W,
        gross_amount: total,
        item_details: carts
    }
    console.log(data, 'data ke midtransssssssss');
    return function (dispatch) {
        dispatch(setLoading(true))
        axios({
            method: 'POST',
            url: baseURL + 'pay',
            data: data
        })
        .then(response => {
            console.log(response.data.order_id, 'response order_id payment');
            console.log(response.data.link, ';;;;;;;;;;;;;;;;');
            navigation.navigate('Midtrans', {link: response.data.link})
            dispatch(deleteCart())
            alert(`Berhasil masuk ke menu pembayaran`);
        })
        .catch(err => {
            console.log(err, 'error payment midtrans');
            alert(`Gagal melakukan pembayaran`);
        })
        .finally(() => {
            dispatch(setLoading(false))
        })
    }
}

export function getTransaction() {
    let userId = getUserId._W
    return function (dispatch) {
        dispatch(setLoading(true))
        axios({
            method: 'GET',
            url: baseURL + 'transactions/' + userId,
            headers: {
                token: getToken._W
            } 
        })
        .then(data => {
            console.log(data.data.transactions, 'ini balikan transaction');
            dispatch(setTransaction(data.data.transactions))
            alert(`berhasil fetch transaction`);
        })
        .catch(err => {
            console.log(err, 'error get product by barcode');
            alert(`Gagal fetch transaction`);
        })
        .finally(() => {
            dispatch(setLoading(false))
        })
    }
}

export function googleLogin(navigation, name, email) {
    return function (dispatch) {
        dispatch(setLoading(true))
        axios({
            method: 'POST',
            url: baseURL + 'glogin',
            data: {
                email,
                name
            }
        })
        .then(data => {
            console.log(data.data, 'ini balikan google login');
            setToken(data.data.token)
            setName(data.data.name)
            setUserId(data.data.userId.toString())
            alert('Login berhasil')
            navigation.navigate('CheckIn')
        })
        .catch(err => {
            console.log(err, 'error login google');
            alert(`Gagal Login dengan Google`);
        })
        .finally(() => {
            dispatch(setLoading(false))
        })
    }
}

