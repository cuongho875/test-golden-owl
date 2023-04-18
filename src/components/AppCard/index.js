import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../app/assets/nike.png";
import CartItem from "../CartItem";
import Product from "../Product";
export default function AppCard({ type, data }) {
  const cart = useSelector((state) => state.cart);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.total.toFixed(2))
  }, [cart]);
  return (
    <div className="app_card">
      <div className="header_card">
        <img src={logo} />
      </div>
      {type == "product" ? (
        <div className="title">
          <div>Our Products</div>
        </div>
      ) : (
        <div className="title">
          <div>Your cart</div>
          {total>0?
          <div>{`\$${total}`}</div>:
          <div>$0.00</div>}
        </div>
      )}
      <div className="app_card_body">
        {type === "product" ? (
          <div>
            {data.map((item, index) => {
              if(item){
                return <Product key={index} data={item} />
              }
            })}
          </div>
        ) : (
          <div>
            {cart.items.length > 0 ? (
              <div>
                {cart.items.map((item, index) => {
              if(item){
                return <CartItem key={index} data={item} />
              }
                })}
              </div>
            ) : (
              <div className="empty">Your cart is empty.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
