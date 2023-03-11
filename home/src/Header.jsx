import React from "react";

const Header = () => {
  return (
    <header class="bg-gray-900 text-white py-4">
      <div class="container mx-auto flex justify-between items-center px-4">
        <h1 class="text-3xl font-bold tracking-wider">Logo</h1>
        <nav class="hidden md:block">
          <ul class="flex space-x-6">
            <li>
              <a href="#" class="hover:text-gray-400 font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-400 font-medium">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-400 font-medium">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button class="md:hidden">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};
export default Header;
