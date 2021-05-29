import { applyMiddleware, createStore } from "redux"
import thunk from 'react-redux'
import { SET_CART, SET_LOADING, SET_ERROR } from './constants'

const initialState = {
    cart: [{name: 'test', qty: 2}],
    loading: true,
    error: null,
    banner: [
        "https://static-siplah.blibli.com/static/img/banner-desktop.c6b8521.png",
        "https://assets-us-01.kc-usercontent.com/a7507759-f4f5-0038-8fff-c1db251108c1/845a7c24-311a-4267-88f9-a28f4009c1cc/Blibli-Diskon%20150.000_WEB%20BANNER.jpg",
        "https://www.blibli.com/page/wp-content/uploads/Ulas-Puas-Banner-utama1.jpg",
        "https://static-siplah.blibli.com/data/sellerBanner/SJPS-0001/452e63f2-9b00-404f-95d0-1fe90559f471.jpg"
      ],
    logo: 'https://library.kissclipart.com/20180904/ege/kissclipart-logo-blibli-clipart-blibli-com-logo-indonesia-8a27c76836cbc048.jpg'
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