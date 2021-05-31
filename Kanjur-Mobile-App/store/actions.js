import axios from 'axios';
import { setName, setToken } from '../asyncStorage';
import { SET_CART, SET_ERROR, SET_LOADING, SET_USER } from './constants'

const baseURL ='https://kanjur-test.herokuapp.com/'

export function setCart(payload) {
    return ({type: SET_CART, payload})
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
        // console.log('masuk')
        dispatch(setLoading(true))
        axios({
            method: 'POST',
            url: baseURL + 'register',
            data: data
        })
        .then(data => {
            dispatch(setUser(data.data))
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            dispatch(setLoading(false))
        })
    }
}

export function postLogin(data) {
    return function (dispatch) {
        setName(data.email)
        dispatch(setLoading(true))
        axios({
            method: 'POST',
            url: baseURL + 'login',
            data: data
        })
        .then(data => {
            setToken(data.data.token)
        })
        .catch(err => {
            console.log(err, 'error post Login');
        })
        .finally(() => {
            dispatch(setLoading(false))
        })
    }
}