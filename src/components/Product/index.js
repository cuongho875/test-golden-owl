import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../redux/actions/cart";
import iconCheck from "../../app/assets/check.png";
export default function Product({ data }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };
  const [isCart, setIsCart] = useState(false);
  useEffect(() => {
    const productIdToFind = data.id;

    const cartItemIndex = cart.items.findIndex((cartItem) => {
      return cartItem.product.id === productIdToFind;
    });

    if (cartItemIndex !== -1) {
      setIsCart(true);
    } else {
      setIsCart(false);
    }
  }, [cart]);
  return (
    <li className="product">
      <div className="img" style={{ background: data.color }}>
        <img src={data.image} />
      </div>
      <div className="name_product">{data.name}</div>
      <div className="desc_product">{data.description}</div>
      <div className="bottom_product">
        <div className="price_product">{`\$${data.price}`}</div>
        {!isCart ? (
          <div className="add-to-cart" onClick={handleAddToCart}>
            Add To Cart
          </div>
        ) : (
          <div className="checked">
            <img src={iconCheck} />
          </div>
        )}
      </div>
    </li>
  );
}
