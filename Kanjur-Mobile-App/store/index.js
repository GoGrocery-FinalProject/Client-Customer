import { applyMiddleware, createStore } from "redux"
import thunk from 'react-redux'
import { SET_CART, SET_LOADING, SET_ERROR } from './constants'

const initialState = {
    cart: [{name: 'test', qty: 2}],
    loading: true,
    error: null
}

function reducer (state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case SET_CART:
            return {...state, card : payload}
        case SET_LOADING:
            return {...state, loading : payload}
        case SET_ERROR:
            return {...state, error : payload}
        default:
            return state
    }
}

export const store = createStore(reducer)