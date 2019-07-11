import React from "react";

class UserForm extends React.Component {
  state = { id: 40 };

  onSubmit = e => {
    e.preventDefault(e);
    this.props.addItemToCart(this.state.id, this.state.quantity);
    console.log("state:", this.state);
  };

  render() {
      
    const selectOptions = this.props.products.map((element, index) => {
      return (
        <option key={element.id} value={element.id}>
          {element.name}
        </option>
      );
    });

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="quantity">Quantity:</label>
          <input
            id="quantity"
            className="form-control"
            type="number"
            min="0"
            name="Quantity"
            onChange={e =>
              this.setState({ quantity: parseInt(e.target.value) })
            }
            required
          />

          <div className="form-group">
            <label htmlFor="products">Products</label>
              <select
              id="products"
                className="form-control"
                onChange={e => this.setState({ id: parseInt(e.target.value) })}
              >
                {selectOptions}
              </select>
          </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
        </form>
      </div>
    );
  }
}

export default UserForm;
