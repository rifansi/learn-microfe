import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "home/Footer";
import Header from "home/Header";
import SafeComponent from "./SafeComponent";
import PDPContent from "./PDPContent";

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
      <SafeComponent>
        <Header app={{ name: "MicroFe" }}></Header>
      </SafeComponent>
      <main className="container mx-auto py-8 px-4 flex-1">
        <Routes>
          <Route path="/products/:id" element={<PDPContent />} />
        </Routes>
      </main>
      <Footer className="self-end"></Footer>
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
