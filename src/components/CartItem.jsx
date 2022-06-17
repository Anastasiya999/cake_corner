function CartItem() {
  return (
    <div className="cart__item">
      <div
        className="cart__item-img"
        style={{ backgroundImage: "url(/img/strawberry_lemonade.jpg)" }}
      ></div>
      <div className="cart__item-info">
        <h3>Strawberry Lemonade</h3>
        <p>gift wrapping, 26cm</p>
      </div>
      <div className="cart__item-count">
        <img src="/img/minus.svg" />
        <span>1</span>
        <img src="/img/plus.svg" />
      </div>
      <span className="cart__item-price">125 pln</span>
      <span className="cart__item-remove">delete</span>
    </div>
  );
}

export default CartItem;
