import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Includes
import Header from "./Components/Includes/Header";
import Navbar from "./Components/Includes/Navbar";
import Footer from "./Components/Includes/Footer";

// Pages
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <Route exact path="/" component={Home} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
