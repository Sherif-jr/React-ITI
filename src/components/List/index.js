import React, { Component } from "react";
import ListItem from "../ListItem";
import { products } from "../../products/products";
import AddProduct from "../AddProduct";

export default class ProductList extends Component {
  componentDidMount() {
    let userArr = localStorage.getItem("user-list");
    if (userArr) {
      this.setState({ products: JSON.parse(userArr) });
    } else {
      this.setState({ products });
    }
  }
  state = {
    products: [],
  };
  updatePriceHandler = (i) => {
    const arr = [...this.state.products];
    arr[i].price += 10;
    this.setState({
      products: arr,
    });
    localStorage.setItem("user-list", JSON.stringify(arr));
  };
  removeProductHandler = (i) => {
    const arr = [...this.state.products];
    arr.splice(i, 1);
    this.setState({
      products: arr,
    });
    localStorage.setItem("user-list", JSON.stringify(arr));
  };
  addNewProductHandler = () => {
    const rand = Math.floor(Math.random() * 5);
    console.log(rand);
    const arr = [...this.state.products];
    arr.push(products[rand]);
    this.setState({ products: arr });
    localStorage.setItem("user-list", JSON.stringify(arr));
  };
  render() {
    return (
      <div className="row row-cols-md-3">
        {this.state.products.map((product, i) => {
          return (
            <ListItem
              key={i}
              productDetails={product}
              updatePrice={() => {
                this.updatePriceHandler(i);
              }}
              removeProduct={() => {
                this.removeProductHandler(i);
              }}
            />
          );
        })}
        <AddProduct addNewProduct={this.addNewProductHandler} />
      </div>
    );
  }
}
