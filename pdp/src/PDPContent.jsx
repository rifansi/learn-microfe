import React, { useEffect, useState } from "react";

import { getProductById, currency } from "../../home/src/products";

export default function PDPContent() {
  const id = 1;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then((data) => {
        setProduct(data);
      });
    } else {
      setProduct(null);
    }
  }, [id]);

  if (product === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex mx-auto">
      <main className="container mx-auto ">
        <div className="grid">
          <div className="bg-white flex">
            <div className="w-1/2">
              <div className="pb-2/3">
                <img
                  className="h-full w-full object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>
            </div>
            <div className="w-1/2 p-4">
              <h2 className="font-bold text-2xl text-gray-900">
                {product.name}
              </h2>
              <p className="text-gray-600">{currency.format(product.price)}</p>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
