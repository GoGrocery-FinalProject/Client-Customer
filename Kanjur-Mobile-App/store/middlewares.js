import { SET_CART } from "./constants"


export function middlewares (store) {
    return function(next) {
        return function(action) {
            let carts = store.getState().cart
            if (action.type === SET_CART) {
                carts.push(action.payload)
                console.log(carts, '<<<<<<<<<<<setelah push');
                next({...action, payload: carts})
            // } else if (action.type === DELETE_TODO) {
            //     let id = action.payload
            //     // console.log(id, 'ini id');
            //     const newTodos = todos.filter((todo) => todo.id !== id)
            //     // console.log(newTodos, '<<<<<< delete id')
            //     next({...action, payload: newTodos})
            // } else if (action.type === SET_STATUS) {
            //     let id = action.payload
            //     for (let i = 0; i < todos.length; i++) {
            //         if (todos[i].id === id) {
            //             todos[i].status = !todos[i].status
            //         }
            //     }
            //     next({...action, payload: todos})
            } else {
                next(action)
            }
        }
    }
}