import React, { Component } from "react";
import { connect } from "react-redux";
class PhonePopup extends Component {
  renderSoLuong = () => {
    return this.props.gioHang.reduce((tongSoLuong, spGH, index) => {
      return (tongSoLuong += spGH.soLuong);
    }, 0);
  };
  render() {
    return (
      <div className="container">
        <div className="d-flex">
          <button className="btn ms-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Card: {this.renderSoLuong()} <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" style={{ minWidth: 1000 }}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <div className="table-responsive">
                    <table className="table" style={{ verticalAlign: "middle" }}>
                      <thead>
                        <tr>
                          <th scope="col">Mã Sản Phẩm</th>
                          <th scope="col">Tên Sản Phẩm</th>
                          <th scope="col">Hình Ảnh</th>
                          <th scope="col">Số Lượng</th>
                          <th scope="col">Đơn Giá</th>
                          <th scope="col">Giá Bán</th>
                          <th scope="col">Hành động</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.gioHang.map((product, index) => {
                          return (
                            <tr key={index}>
                              <td>{product.maSP}</td>
                              <td width="10%">
                                <img src={product.hinhAnh} alt={product.maSP} style={{ width: "100%" }} />
                              </td>
                              <td>{product.tenSP}</td>
                              <td>
                                <button className="btn btn-success me-3" style={{ width: "40px" }} onClick={() => {}}>
                                  +
                                </button>
                                {product.soLuong}
                                <button className="btn btn-success ms-3" style={{ width: "40px" }} onClick={() => {}}>
                                  -
                                </button>
                              </td>
                              <td>{product.giaBan.toLocaleString()}</td>
                              <td>{(product.giaBan * product.soLuong).toLocaleString()}</td>
                              <td>
                                <button
                                  onClick={() => {
                                    this.props.xoaGioHang(product.maSP);
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
                      <tfoot>
                        <tr>
                          <th colSpan="5"></th>
                          <th>Sum Price:</th>
                          <th>
                            {this.props.gioHang
                              .reduce((tongTien, spGioHang, index) => {
                                return (tongTien += spGioHang.soLuong * spGioHang.giaBan);
                              }, 0)
                              .toLocaleString()}
                          </th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.stateCard.gioHang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSP) => {
      let action = {
        type: "XOA_GIO_HANG",
        maSP,
      };
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, tangSoLuong) => {
      let action = {
        type: "TANG_GIAM_SO_LUONG",
        maSP,
        tangSoLuong,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhonePopup);
