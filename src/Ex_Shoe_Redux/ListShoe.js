import React, { Component } from "react";
import ItemShoe from "./ItemShoe";
import { connect } from "react-redux";

class ListShoe extends Component {
  render() {
    const { handleCart } = this.props;
    return (
      <div className="row">
        {this.props.list.map((item, index) => {
          return <ItemShoe handleCart={handleCart} key={index} data={item} />;
        })}
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    // root => initialState
    list: state.shoeReducer.shoeArr,
  };
};
export default connect(mapStateToProps)(ListShoe);
