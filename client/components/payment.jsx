import React from "react";
import HeaderContent from "./header/header-content.jsx";
import FooterContent from "./footer/footer-content.jsx";

class Payment extends React.Component{
  render() {
    return (
      <div>
        <HeaderContent />
        <div>hello {this.props.name}</div>
        <FooterContent />
      </div>
    );
  }
}

export default Payment;
