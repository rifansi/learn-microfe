import React, { useState, useEffect } from "react";

import { cart, clearCart } from "./cart";
import { currency } from "home/products";

export default function MiniCart() {
  const [items, setItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.items);
    return cart.subscribe((v) => setItems(v?.items));
  }, []);

  if (!items?.length) return null;

  return (
    <>
      <span onClick={() => setShowCart(!showCart)} className="cursor-pointer">
        <i className="ri-shopping-cart-line text-2xl" id="showcart"></i>
      </span>
      {showCart && (
        <div className="relative">
          <div className="absolute right-0 mt-2 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Cart</h2>
            <ul className="flex flex-col">
              {items.map((item) => (
                <li key={item.id} className="flex items-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-700">
                      {currency.format(item.price)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
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
