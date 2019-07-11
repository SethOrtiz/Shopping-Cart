import React from "react";
import CartItem from "./CartItem.js";

class CartItems extends React.Component {
  render() {
    let cartElements = this.props.cartItemsList.map(product => {
      return (
        <CartItem
          key={product.id}
          name={product.name}
          priceInCents={(product.priceInCents/100).toLocaleString("en-US", {style:"currency", currency:"USD"})} 
          quantity={product.quantity}
        />
      );
    });
    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          {cartElements}
          Total Price = {(this.props.total/100).toLocaleString("en-US", {style:"currency", currency:"USD"})}
        </div>
      </div>
    );
  }
}

export default CartItems;
