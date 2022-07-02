import React from "react";
import { useDispatch } from "react-redux";
import { addItem, minusItem } from "../redux/slices/cart/slice";
import { CartItemType } from "../redux/slices/cart/types";

type CartItemProps = {
  id: number;
  imageUrl: string;
  name: string;
  count: number;
  price: number;
  size: number;
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  imageUrl,
  name,
  count,
  price,
  size,
}) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addItem({
        id,
        size,
      } as CartItemType)
    );
  };

  const handleMinus = () => {
    dispatch(minusItem({ id, size }));
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
};

export default CartItem;
