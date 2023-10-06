import "./App.css";
import ProductList from "./components/List";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="container mx-auto my-5">
        <ProductList />
      </div>
    );
  }
}
