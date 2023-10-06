import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    return (
      <div className="col p-3">
        <div className=" p-3 rounded-4 border shadow">
          <h3>{this.props.productDetails.title}</h3>
          <p>{this.props.productDetails.brand}</p>
          <p>{this.props.productDetails.price}</p>
          <div className="d-flex flex-column gap-3">
            <button
              className="btn btn-primary"
              onClick={() => {
                console.log("clicked");
                this.props.updatePrice();
              }}
            >
              Add to price
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                console.log("remove clicked");
                this.props.removeProduct();
              }}
            >
              Remove product
            </button>
          </div>
        </div>
      </div>
    );
  }
}
