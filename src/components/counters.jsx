import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-outline-primary btn-sm m-2"
        >
          Quantity to 0
        </button>
        <button
          onClick={this.props.onDeleteAll}
          className="btn btn-outline-primary btn-sm m-2"
        >
          Delete all the Items
        </button>
        {this.props.counters.length === 0 && (
          <h5 style={{ padding: "1rem" }}>There are no items in the basket</h5>
        )}
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
