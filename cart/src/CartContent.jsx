import React, { useState, useEffect } from "react";
import Login from "./Login";
import { jwt } from "./cart";

export default function CartContent() {
  const [token, setToken] = useState("");
  useEffect(() => jwt.subscribe((t) => setToken(t)), []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      {token && <p className="text-center">You are logged in!</p>}
      <Login />
    </div>
  );
}
