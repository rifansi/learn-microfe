import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

import Header from "home/Header";
import Footer from "home/Footer";
import CartContent from "./CartContent";

const App = () => (
  <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
    <Header app={{ name: "MicroFe" }}></Header>
    <main className="container mx-auto py-8 px-4 flex-1">
      <CartContent />
    </main>
    <Footer className="self-end"></Footer>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
