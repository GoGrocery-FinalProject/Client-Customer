import { DELETE_CART_BYINDEX, SET_CART, SET_TOTAL } from "./constants"


export function middlewares (store) {
    return function(next) {
        return function(action) {
            let carts = store.getState().cart
            if (action.type === SET_CART) {
                carts.push(action.payload)
                console.log(carts, '<<<<<<<<<<<setelah push');
                next({...action, payload: carts})
            } else if (action.type === DELETE_CART_BYINDEX) {
                let index = action.payload
                let newCarts = carts.filter((el,idx) => idx !== index )
                console.log(newCarts, 'setelah dikurangi >>>>>>>>>.');
                next({...action, payload: newCarts})
            } else {
                next(action)
            }
        }
    }
}