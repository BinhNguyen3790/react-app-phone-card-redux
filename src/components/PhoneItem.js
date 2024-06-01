import React, { Component } from "react";
import { connect } from "react-redux";
class PhoneItem extends Component {
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
            onClick={() => {
              this.props.themGioHang(phone);
            }}
            className="btn btn-primary"
          >
            Add to Card
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPham) => {
      let spGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        soLuong: 1,
        giaBan: sanPham.giaBan,
        hinhAnh: sanPham.hinhAnh,
      };

      let action = {
        type: "THEM_GIO_HANG",
        spGioHang,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(PhoneItem);
