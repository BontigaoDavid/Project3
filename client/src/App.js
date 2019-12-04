import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Page Global Includes
import { Header, Navbar } from "./pages/includes/index";

// Pages
import { Home, Profile, Lesson, About } from "./pages/index";

// import tableOfContents from "./components/lesson/index";
import BoxModel from "./components/lesson/css/box-model/Lesson";
import Variables from "./components/lesson/es6/variables/Variables";
import Function from "./components/lesson/es6/functions/Function";
import MVC from "./components/lesson/logic/mvc/mvc";
import timeComplexity from "./components/lesson/logic/time-complexity/time-complexity";

function App() {
  return (
    <Router>
      <div className="App justify-content-stretch">
        <Header />
        <Navbar />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        <main className="my-5">
          <Route exact path="/user" component={Profile} />
          <Route exact path="/lesson" component={Lesson} />
          
          <Route exact path="/lesson/css/box-model" component={BoxModel} />

          <Route exact path="/lesson/es6/variables" component={Variables} />
          <Route exact path="/lesson/es6/function" component={Function} />

          <Route exact path="/lesson/logic/mvc" component={MVC} />
          <Route exact path="/lesson/logic/time-complexity" component={timeComplexity} />
        </main>
          </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
