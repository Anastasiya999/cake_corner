import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import CartEmpty from "../components/CartEmpty";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  return (
    <div className="cart">
      <div className="cart__top">
        <div className="cart__top-title">
          <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.49958 26C6.86402 26 6.3238 25.7722 5.87891 25.3166C5.43402 24.8611 5.21157 24.3079 5.21157 23.6571C5.21157 23.0063 5.43402 22.4531 5.87891 21.9975C6.3238 21.5419 6.86402 21.3141 7.49958 21.3141C8.11395 21.3141 8.64888 21.5419 9.10436 21.9975C9.55984 22.4531 9.78758 23.0063 9.78758 23.6571C9.78758 24.3079 9.56514 24.8611 9.12025 25.3166C8.67536 25.7722 8.13513 26 7.49958 26ZM20.2107 26C19.5752 26 19.0349 25.7722 18.5901 25.3166C18.1452 24.8611 17.9227 24.3079 17.9227 23.6571C17.9227 23.0063 18.1452 22.4531 18.5901 21.9975C19.0349 21.5419 19.5752 21.3141 20.2107 21.3141C20.8251 21.3141 21.36 21.5419 21.8155 21.9975C22.271 22.4531 22.4987 23.0063 22.4987 23.6571C22.4987 24.3079 22.2763 24.8611 21.8314 25.3166C21.3865 25.7722 20.8463 26 20.2107 26ZM5.84713 4.52315L9.34269 11.9424H18.4947L22.467 4.52315H5.84713ZM4.89379 2.57071H23.611C24.2889 2.57071 24.7179 2.78223 24.898 3.20526C25.078 3.62829 25.0198 4.10013 24.7232 4.62078L20.4332 12.5282C20.2213 12.897 19.9247 13.2169 19.5434 13.4881C19.1621 13.7593 18.7489 13.8949 18.3041 13.8949H8.67536L6.8958 17.2791H22.4987V19.2315H7.1818C6.29202 19.2315 5.65116 18.9278 5.25924 18.3204C4.86731 17.713 4.87261 17.0296 5.27513 16.2703L7.30891 12.4305L2.47867 1.95244H0V0H3.71801L4.89379 2.57071Z"
              fill="black"
            />
          </svg>
          <span>Cart</span>
        </div>
        <div className="cart__top-clear">
          <svg
            width="23"
            height="25"
            viewBox="0 0 23 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.97188 24.875C3.42188 24.875 2.94062 24.6687 2.52812 24.2562C2.11562 23.8437 1.90938 23.3625 1.90938 22.8125V3.21875H0.5V1.15625H6.9625V0.125H16.0375V1.15625H22.5V3.21875H21.0906V22.8125C21.0906 23.3625 20.8844 23.8437 20.4719 24.2562C20.0594 24.6687 19.5781 24.875 19.0281 24.875H3.97188ZM19.0281 3.21875H3.97188V22.8125H19.0281V3.21875ZM7.61563 19.8563H9.67813V6.14062H7.61563V19.8563ZM13.3219 19.8563H15.3844V6.14062H13.3219V19.8563ZM3.97188 3.21875V22.8125V3.21875Z"
              fill="black"
              fill-opacity="0.58"
            />
          </svg>
          <span>Empty cart</span>
        </div>
      </div>

      <div className="cart__items">
        {(items || []).map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="cart__bottom">
        <div className="cart__bottom-details">
          <span>
            All: <b>2</b> items
          </span>
          <span>
            Total: <b>200 pln</b>
          </span>
        </div>
        <div className="cart__bottom-buttons">
          <button className="button button--outline">Return</button>
          <button className="button button--pay">Order</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
