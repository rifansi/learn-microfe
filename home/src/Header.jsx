import React from "react";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

const Header = ({ app }) => {
  return (
    <header className="bg-gray-100 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold tracking-wider">{app.name}</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Login />
            </li>
            <li>
              <MiniCart />
            </li>
          </ul>
        </nav>
        <button className="md:hidden">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};
export default Header;
