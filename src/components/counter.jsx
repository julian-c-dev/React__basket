import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  state = {
    randomNumber: Math.floor(Math.random() * 100),
  };
  render() {
    return (
      <React.Fragment>
        <div className="product__card">
          <div className="product__flex">
            <p className="product__title">
              Product {this.state.randomNumber} -
              <span className="product__price">
                price: £{this.props.counter.price}
              </span>
            </p>

            <span>
              Total: £ {this.props.counter.price * this.props.counter.value}
            </span>
          </div>
          <p className="product__descritpion">
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolorum earum impedit natus dolores sequi tenetur totam,
            molestiae deleniti fuga minus.
          </p>

          <div className="product__flex">
            <div className="product__group-qty">
              <button
                onClick={() => this.props.onIncrement(this.props.counter)}
                className="product__btn"
              >
                +
              </button>
              <button
                onClick={() => this.props.onDecrement(this.props.counter)}
                className="product__btn btn-minus"
              >
                -
              </button>
            </div>
            <span>
              Qty:
              {this.renderSumTotalItems()}
            </span>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge ml-4 rounded-pill badge-";
    classes += this.props.counter.value <= 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let { value } = this.props.counter;
    return value <= 0 ? "Zero" : value;
  }

  renderSumTotalItems() {
    return <span className={this.getBadgeClasses()}>{this.formatCount()}</span>;
  }
}

export default Counter;
