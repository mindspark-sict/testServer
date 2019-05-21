import React, { Component } from "react";
import "./App.css";
import Content from "./Content";
import NavBar from "./navbar";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
