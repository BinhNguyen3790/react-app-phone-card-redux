import React, { Component } from "react";
import PhoneList from "./PhoneList";
import PhonePopup from "./PhonePopup";
class PhoneCard extends Component {
  render() {
    return (
      <div>
        <PhonePopup />
        <PhoneList />
      </div>
    );
  }
}

export default PhoneCard;
