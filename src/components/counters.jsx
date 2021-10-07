import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      onDeleteAll,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;

    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-outline-primary btn-sm m-2"
        >
          Quantity to 0
        </button>
        <button
          onClick={onDeleteAll}
          className="btn btn-outline-primary btn-sm m-2"
        >
          Delete all the Items
        </button>
        {counters.length === 0 && (
          <h5 style={{ padding: "1rem" }}>There are no items in the basket</h5>
        )}
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
