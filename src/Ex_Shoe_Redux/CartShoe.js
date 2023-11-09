import React, { Component } from "react";
import { connect } from "react-redux";

class CartShoe extends Component {
  render() {
    // let { handleCartQuantity } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>
                  <img
                    style={{
                      width: 50,
                    }}
                    src={item.image}
                    alt=""
                  />
                </td>

                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      this.props.handleClickQuantity(item.id, 1);
                    }}
                  >
                    +
                  </button>
                  <span className="mx-3">{item.cartQuantity}</span>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.props.handleClickQuantity(item.id, -1);
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => {
                      this.props.handleClickRemove(item.id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    cart: state.shoeReducer.cart,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleClickQuantity: (shoeId, quantity) => {
      let action = {
        type: "ADJ_QUANTITY",
        payload: { shoeId, quantity },
      };
      dispatch(action);
    },
    handleClickRemove: (shoe) => {
      let action = {
        type: "DEL_SHOE",
        payload: shoe,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartShoe);
