import React, { Component } from "react";
import { connect } from "react-redux";

class ItemShoe extends Component {
  render() {
    let { data } = this.props;
    return (
      <div className="col-3 card">
        <img className="w-100" src={data.image} alt="" />
        <br />

        <button
          className="btn btn-primary"
          onClick={() => this.props.handleClickAdd(data)}
        >
          Add
        </button>
        <button
          onClick={() => {
            this.props.handleClickView(data);
          }}
          className="btn btn-info"
        >
          View
        </button>
      </div>
    );
  }
}
//  đẩy data lên redux để update store
let mapDispatchToProps = (dispatch) => {
  return {
    handleClickView: (shoe) => {
      let action = {
        type: "VIEW_DETAIL",
        payload: shoe,
      };
      dispatch(action);
    },
    handleClickAdd: (shoe) => {
      let action = {
        type: "ADD_SHOE",
        payload: shoe,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(ItemShoe);
