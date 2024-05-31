import React, { Component } from "react";
class PhoneItem extends Component {
  state = {};
  render() {
    let { phone } = this.props;
    return (
      <div className="card h-100">
        <img src={phone.hinhAnh} className="card-img-top" alt="..." style={{ width: "100%" }} />
        <div className="card-body">
          <h5 className="card-title">{phone.tenSP}</h5>
          <p className="card-text">{phone.manHinh}</p>
          <p className="card-text">{phone.giaBan.toLocaleString()} VND</p>
          <button
            onClick={() => {}}
            className="btn btn-primary"
          >
            Add to Card
          </button>
        </div>
      </div>
    );
  }
}

export default PhoneItem;
