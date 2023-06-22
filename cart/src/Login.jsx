import React, { useState, useEffect } from "react";

import { login, useLoggedIn } from "./cart";

export default function Login() {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("sally");
  const [password, setPassword] = useState("123");

  if (loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)} className="cursor-pointer">
        <i className="ri-fingerprint-line text-2xl" id="showlogin"></i>
      </span>
      {showLogin && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form className="flex flex-col">
              <label htmlFor="username" className="mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
              />
              <label htmlFor="password" className="mt-4 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={() => login(username, password)}
                type="button"
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 focus:outline-none"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
