import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <Home />
      <Footer />

      {/* Banner */}
    </div>
  );
}

export default App;
