import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";

import "./index.scss";

const App = () => (
  <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
    <Header app={{ name: "This is from home component" }}></Header>
    <main className="container mx-auto py-8 px-4 flex-1">body</main>
    <Footer className="self-end"></Footer>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
