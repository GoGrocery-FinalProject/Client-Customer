import { SET_CART, SET_TOTAL } from "./constants"


export function middlewares (store) {
    return function(next) {
        return function(action) {
            let carts = store.getState().cart
            if (action.type === SET_CART) {
                carts.push(action.payload)
                console.log(carts, '<<<<<<<<<<<setelah push');
                next({...action, payload: carts})
            // } else if (action.type === SET_TOTAL) {
            //     let subTotal = 0
            //     for (let i = 0; i < carts.length; i++) {
            //         subTotal += (carts[i].price * carts[i].quantity)
            //     }
            //     next({...action, payload: subTotal})
            } else {
                next(action)
            }
        }
    }
}