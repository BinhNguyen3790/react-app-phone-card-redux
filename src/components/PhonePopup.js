import React, { Component } from "react";
import { connect } from "react-redux";
class PhonePopup extends Component {
  renderProduct = () => {
    let listCard = this.props.gioHang;
    return listCard.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.maSP}</td>
          <td>{product.tenSP}</td>
          <td width="10%">
            <img src={product.hinhAnh} alt={product.maSP} style={{ width: "100%" }} />
          </td>
          <td>
            <button className="btn btn-success me-3" style={{ width: "40px" }} onClick={() => {}}>
              +
            </button>
            {product.soLuong}
            <button className="btn btn-success ms-3" style={{ width: "40px" }} onClick={() => {}}>
              -
            </button>
          </td>
          <td>{product.donGia}</td>
          <td>{(product.donGia * product.soLuong)}</td>
          <td>
            <button onClick={() => {}} className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="d-flex">
          <button className="btn ms-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Card: 1 <i className="fa fa-shopping-cart" aria-hidden="true"></i>
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
                      <tbody>{this.renderProduct()}</tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="5"></td>
                          <td>Sum Price:</td>
                          <td>111</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
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

export default connect(mapStateToProps)(PhonePopup);