import React, { useState, useEffect } from "react";

import { getProducts, currency } from "./products";

export default function HomeContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
      <main className="container mx-auto py-8 px-4 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              key={product.id}
            >
              <div className="relative pb-2/3 " style={{ minHeight: "200px" }}>
                <img
                  className="absolute h-full w-full object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{product.name}</h3>
                <p className="text-gray-600">
                  {currency.format(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
