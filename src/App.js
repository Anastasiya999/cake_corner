import React from "react";
import { Route, Routes } from "react-router-dom";

import "./style/App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="*" exact element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
