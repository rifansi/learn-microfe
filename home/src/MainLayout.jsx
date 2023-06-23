import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "home/Footer";
import Header from "home/Header";
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";

export default function MainLayout() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
        <Header app={{ name: "MicroFe" }}></Header>
        <main className="container mx-auto py-8 px-4 flex-1">
          <Routes>
            <Route exact path="/" element={<HomeContent />} />
            <Route path="/products/:id" element={<PDPContent />} />
          </Routes>
        </main>
        <Footer className="self-end"></Footer>
      </div>
    </Router>
  );
}
