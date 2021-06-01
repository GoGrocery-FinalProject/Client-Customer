import { SET_CART } from "./constants"


export function middlewares (store) {
    return function(next) {
        return function(action) {
            let carts = store.getState().cart
            if (action.type === SET_CART) {
                carts.push(action.payload)
                console.log(carts, '<<<<<<<<<<<setelah push');
                next({...action, payload: carts})
            } else {
                next(action)
            }
        }
    }
}