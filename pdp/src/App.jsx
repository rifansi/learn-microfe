import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import Footer from "home/Footer";
import Header from "home/Header";

const App = () => (
  <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
    <Header></Header>
    <main className="container mx-auto py-8 px-4 flex-1">PDP content</main>
    <Footer className="self-end"></Footer>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
