import React, { useState, useEffect } from "react";

import { cart, clearCart } from "./cart";
import { currency } from "home/products";

export default function MiniCart() {
  const [items, setItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const calculateTotal = () =>
    items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    setItems(cart.value?.items);
    return cart.subscribe((v) => setItems(v?.items));
  }, []);

  //   if (!items?.length) return null;

  return (
    <>
      <span onClick={() => setShowCart(!showCart)} className="cursor-pointer">
        <i className="ri-shopping-cart-line text-2xl" id="showcart"></i>
      </span>
      {showCart && (
        <div className="relative z-50">
          <div className="absolute right-0 mt-2 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
            <>
              {items.map((item) => (
                <React.Fragment key={item.id}>
                  <li className="flex items-center mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-gray-700">
                        {currency.format(item.price)} x {item.quantity}
                      </p>
                    </div>
                  </li>
                </React.Fragment>
              ))}
            </>
            <hr className="my-4" />
            <div className="flex justify-between">
              <h4 className="font-bold">Total:</h4>
              <p className="font-bold">{currency.format(calculateTotal())}</p>
            </div>
            <button
              onClick={() => clearCart()}
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 focus:outline-none"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
