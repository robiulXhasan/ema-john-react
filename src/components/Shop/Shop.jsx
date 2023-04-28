import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Product from "../Product/Product";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/LocalStorage";
import "./Shop.css";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id of the addedProduct
    for (const id in storedCart) {
      // step 2: get product from products state by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        // step 3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the added product to the saved cart
        savedCart.push(addedProduct);
      }
      // console.log('added Product', addedProduct)
    }
    // step 5: set the cart
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    // cart.push(product); '
    let newCart = [];
    // const newCart = [...cart, product];
    // if product doesn't exist in the cart, then set quantity = 1
    // if exist update quantity by 1
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  const count = 1;
  return (
    <div className="shop-container mt-5">
      <Container>
        <div className="products-container  text-center ">
          {products.map((product) => (
            <Product product={product} key={product.id} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      </Container>
      <Cart cart={cart} handleClearCart={handleClearCart} count={count}>
        <Button className="w-100 ">
          <Link className="text-white" to="/orders">
            Review Order <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Button>
      </Cart>
    </div>
  );
};

export default Shop;
