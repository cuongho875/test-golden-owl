import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import remove from '../../app/assets/trash.png'
import { removeCart,increaseQuantity,decreaseQuantity } from '../../redux/actions/cart';
export default function CartItem({data}) {
    const product =data.product;
    const dispatch = useDispatch();
    const handleRemoveItem = ()=>{
        dispatch(removeCart(product.id));
    }
    const handleIncreaseQuantity = ()=>{
        dispatch(increaseQuantity(product.id));
    }
    const handleDecreaseQuantity = ()=>{
        if(data.quantity > 1){
        dispatch(decreaseQuantity(product.id));
        }else {
        dispatch(removeCart(product.id));
        }
    }
    useEffect(()=>{

    },[data])
  return (
    <div className="cart-item">
        <div className="cart-item_left">
            <div  className="cart-item_img" style={{backgroundColor:product.color}}>
                <img src={product.image}/>
            </div>
        </div>
        <div className="cart-item_right">
            <div className="cart-item_name">{product.name}</div>
            <div className="cart-item_price">{`\$${product.price}`}</div>
            <div className="cart-item_action">
                <div className="cart-item_count">
                    <button onClick={handleDecreaseQuantity}>-</button>
                    <div className="quantity">{data.quantity}</div>
                    <button onClick={handleIncreaseQuantity}>+</button>

                </div>
                <div className="cart-item_remove" onClick={handleRemoveItem}>
                    <img src={remove}/>
                </div>
            </div>
        </div>
    </div>
  )
}
