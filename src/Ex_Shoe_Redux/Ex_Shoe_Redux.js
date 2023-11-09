import React, { Component } from "react";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import { shoeArr } from "./data";

export default class Ex_Shoe_Redux extends Component {
  state = {
    shoeArr: shoeArr,
    detail: shoeArr[0],
    // cart: shoeArr,
    cart: [],
  };

  // quantity: +1 | -1
  handleCartQuantity = (shoeId, quantity) => {
    console.log("shoeId: ", shoeId);
    console.log("quantity: ", quantity);

    // falsy: 0, '', undefined, NaN, false, null => false
    // truthy: => true
    // A || B
    // 0 || 1 => 1
    // 1 || 2 => 1
    const newCart = [...this.state.cart];

    const index = newCart.findIndex((value) => value.id === shoeId);

    if (index !== -1) {
      newCart[index].cartQuantity = newCart[index].cartQuantity + quantity || 1;
      // 0 || 1
    }

    this.setState({
      cart: newCart,
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <CartShoe handleCartQuantity={this.handleCartQuantity} />
        </div>
        <div className="col-6">
          <ListShoe />
        </div>
        <div className="col-12">
          <DetailShoe />
        </div>
      </div>
    );
  }
}
