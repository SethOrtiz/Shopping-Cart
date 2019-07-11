import React from "react";

function CartItem(props) {
  return (
    <div className="collection-item list-group-item" >
      <div className="row">
        <div className="col-md-8">{props.name}</div>
        <div className="col-md-2">{props.priceInCents}</div>
        <div className="col-md-2">{props.quantity}</div>
      </div>
    </div>
  );
}

export default CartItem;
