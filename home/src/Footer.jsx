import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <p>&copy; 2023 Example Company</p>
        <nav>
          <ul className="flex">
            <li className="ml-4">
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li className="ml-4">
              <a href="#" className="hover:text-gray-400">
                Terms of Service
              </a>
            </li>
            <li className="ml-4">
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
