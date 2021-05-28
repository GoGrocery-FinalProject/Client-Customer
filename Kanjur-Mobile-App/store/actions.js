import { SET_CART, SET_ERROR, SET_LOADING } from './constants'

export function setCart(payload) {
    return ({type: SET_CART, payload})
}

export function setLoading(payload) {
    return ({type: SET_LOADING, payload})
}

export function setError(payload) {
    return ({type: SET_ERROR, payload})
}