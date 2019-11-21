import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Includes
import { Header, Navbar, Footer } from "./components/includes/index";

// Pages
import { Home, Profile, Lesson, About } from "./pages/index";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <main className="my-5">
          <Route exact path="/" component={Home} />
          <Route path="/user" component={Profile} />
          <Route path="/lesson" component={Lesson} />
          <Route exact path="/about" component={About} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
