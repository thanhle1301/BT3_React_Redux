import React, { Component } from 'react'

export default class ItemShoe extends Component {
    render() {
        let { data, handleViewDetail, handleCart } = this.props
        return (
            <div className="col-3 card">
                <img className="w-100" src={data.image} alt="" />
                <br />

                <button className="btn btn-primary" onClick={() => handleCart(data)}>
                    Add
                </button>
                <button
                    onClick={() => {
                        handleViewDetail(data)
                    }}
                    className="btn btn-info"
                >
                    View
                </button>
            </div>
        )
    }
}
