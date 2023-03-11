import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import Footer from "home/Footer";
import Header from "home/Header";
import SafeComponent from "./SafeComponent";

const App = () => (
  <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
    <SafeComponent>
      <Header app={{ name: "MicroFe" }}></Header>
    </SafeComponent>
    <main className="container mx-auto py-8 px-4 flex-1">PDP content</main>
    <Footer className="self-end"></Footer>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
