import { useNavigate } from "react-router-dom";
function CartEmpty() {
  const navigate = useNavigate();
  return (
    <div className="cart__empty">
      <h2>You cart is empty</h2>
      <img src="/img/empty-cart.png" alt="empty cart" />
      <button className="button button--outline" onClick={() => navigate("/")}>
        Continue shopping
      </button>
    </div>
  );
}

export default CartEmpty;
