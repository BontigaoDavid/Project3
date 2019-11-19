import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Includes
import Header from "./components/includes/Header";
import Navbar from "./components/includes/Navbar";
import Footer from "./components/includes/Footer";

// Pages
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
