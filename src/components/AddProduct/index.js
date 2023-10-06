import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
export default class AddProduct extends Component {
  render() {
    return (
      <div className="p-3">
        <button
          className="w-100 h-100 btn border rounded-4"
          onClick={this.props.addNewProduct}
        >
          <span className="fw-bold display-6 d-block">+</span>
          Add New Random Product
        </button>
      </div>
    );
  }
}
