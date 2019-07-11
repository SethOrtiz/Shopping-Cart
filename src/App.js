import React from "react";
import CartHeader from "./components/CartHeader.js";
import CartFooter from "./components/CartFooter.js";
import CartItems from "./components/CartItems.js";
import UserForm from "./components/UserForm.js";

class App extends React.Component {
  state = {
    products: [
      { id: 40, name: "Mediocre Iron Watch", priceInCents: 399, quantity: 1},
      { id: 41, name: "Heavy Duty Concrete Plate", priceInCents: 499, quantity: 1},
      { id: 42, name: "Intelligent Paper Knife", priceInCents: 1999, quantity: 1},
      { id: 43, name: "Small Aluminum Keyboard", priceInCents: 2500, quantity: 0},
      { id: 44, name: "Practical Copper Plate", priceInCents: 1000, quantity: 0},
      { id: 45, name: "Awesome Bronze Pants", priceInCents: 399, quantity: 0},
      { id: 46, name: "Intelligent Leather Clock", priceInCents: 2999, quantity: 0},
      { id: 47, name: "Ergonomic Bronze Lamp", priceInCents: 40000, quantity: 0},
      { id: 48, name: "Awesome Leather Shoes", priceInCents: 3990, quantity: 0}
    ]
  };

  addItemToCart = (id, itemQuantity) => {
    this.setState(prevState => {
      return {
        products: prevState.products.map(product => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + itemQuantity,
            };
          } else {
            return product;
          }
        })
      };
    });
  };

  render() {
    const cartItemsList = this.state.products.filter(product => product.quantity > 0)  
    const cartTotal = cartItemsList.reduce((accumlator, currentValue) => accumlator + currentValue.priceInCents * currentValue.quantity , 0)
    return (
      <>
        <CartHeader />
        <CartItems total={cartTotal} cartItemsList={cartItemsList} /> 
        <UserForm
          products={this.state.products}
          addItemToCart={this.addItemToCart}
        />
        <CartFooter copyright="2019" />
      </>
    );
  }
}

export default App;

