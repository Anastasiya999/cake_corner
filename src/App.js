import logo from "./logo.svg";
import "./style/App.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className=" content__title "> All cakes </h2>
          <div className="content__items">
            <ProductCard
              title="Strawberry Cheesecake"
              imgSrc="/img/strawberry_cheesecake.jpg"
              price={365}
            />
            <ProductCard
              title="Popcorn Unicorn"
              imgSrc="/img/popcorn_unicorn.jpg"
              price={245}
            />
            <ProductCard
              title="Popcorn Unicorn"
              imgSrc="/img/popcorn_unicorn.jpg"
              price={245}
            />
            <ProductCard
              title="Strawberry Lemonade"
              imgSrc="/img/strawberry_lemonade.jpg"
              price={245}
            />
            <ProductCard
              title="Popcorn Unicorn"
              imgSrc="/img/popcorn_unicorn.jpg"
              price={245}
            />
            <ProductCard
              title="Strawberry Lemonade"
              imgSrc="/img/strawberry_lemonade.jpg"
              price={245}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
