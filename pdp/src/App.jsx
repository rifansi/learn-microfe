import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import Footer from "home/Footer";
const Header = React.lazy(() => import("home/Header"));

const App = () => {
  const [showHeader, setShowHeader] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
      {showHeader && (
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
      )}

      <button
        onClick={() => setShowHeader(!showHeader)}
        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
      >
        Click me to toggle header
      </button>

      <main className="container mx-auto py-8 px-4 flex-1">PDP content</main>
      <Footer className="self-end"></Footer>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
