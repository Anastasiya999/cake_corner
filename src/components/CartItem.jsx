import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slices/cartSlice";

function CartItem({ id, imageUrl, name, count, price, size }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addItem({ id, price }));
  };

  const handleMinus = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className="cart__item">
      <div
        className="cart__item-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>{`${size} cm`}</p>
      </div>
      <div className="cart__item-count">
        <img src="/img/minus.svg" onClick={handleMinus} />
        <span>{count}</span>
        <img src="/img/plus.svg" onClick={handleAdd} />
      </div>
      <span className="cart__item-price">{`${count * price} pln`}</span>
      <span className="cart__item-remove">delete</span>
    </div>
  );
}

export default CartItem;
