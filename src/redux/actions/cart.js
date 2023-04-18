import { ADD_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_CART } from "../const"

export const addToCart = (data)=>{
    return {
        type: ADD_TO_CART,
        payload: {
            product:data,
            quantity:1
        }
    }
}
export const removeCart = (id)=>{
    return {
        type: REMOVE_CART,
        payload: id
    }
}
export const increaseQuantity = (id) => ({
    type: INCREASE_QUANTITY,
    payload: id,
  });
  
  export const decreaseQuantity = (id) => ({
    type: DECREASE_QUANTITY,
    payload: id,
  });