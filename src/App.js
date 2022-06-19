import React from "react";
import { Route, Routes } from "react-router-dom";

import "./style/App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" exact element={<Home />} />
        <Route path="cart" exact element={<Cart />} />
        <Route path="*" exact element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
