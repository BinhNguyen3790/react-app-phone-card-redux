const stateCard = {
  gioHang: [],
};

const PhoneCardReduce = (state = stateCard, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let index = state.gioHang.findIndex((spGH) => spGH.maSP === action.spGioHang.maSP);
      console.log(index);
      if (index !== -1) {
        state.gioHang[index].soLuong += 1;
      } else {
        state.gioHang.push(action.spGioHang);
      }
      state.gioHang = [...state.gioHang];
      return { ...state };
    }
  }
  return { ...state };
};

export default PhoneCardReduce;
