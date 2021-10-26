import { ButtonGroup } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Navbar, Products, Cart, CheckOut } from "./index";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import commerce from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (productID, quantity) => {
    const { cart } = await commerce.cart.add(productID, quantity);
    setCart(cart);
  };

  const handleUpdateQty = async (productID, quantity) => {
    const { cart } = await commerce.cart.update(productID, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productID) => {
    const { cart } = await commerce.cart.remove(productID);
    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };
  const handleCaptureCheckout = async (CheckoutTokenID, newOrder) => {
    try {
      const incommingOrder = await commerce.checkout.capture(
        CheckoutTokenID,
        newOrder
      );
      setOrder(incommingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => (fetchProducts(), fetchCart()), []);
  return (
    <Router>
      <div className="body">
        <Navbar totalItems={cart.total_items}></Navbar>
        <Switch>
          <Route exact path="/">
            <Products
              products={products}
              addToCart={handleAddToCart}
            ></Products>
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateQty={handleUpdateQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            ></Cart>
          </Route>
          <Route exact path="/checkout">
            <CheckOut
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
              order={order}
              cart={cart}
            ></CheckOut>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
