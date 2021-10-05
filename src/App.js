import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1, price: Math.floor(Math.random() * 50) },
      { id: 2, value: 2, price: Math.floor(Math.random() * 50) },
      { id: 3, value: 1, price: Math.floor(Math.random() * 50) },
      { id: 4, value: 1, price: Math.floor(Math.random() * 50) },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    if (counters[index].value <= 0) counters[index].value = 0;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDeleteAll = () => {
    const counters = [];
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
          totalValuesCounters={this.state.counters
            .map((item) => item.value)
            .reduce((ac, cur) => ac + cur, 0)}
          totalPriceCounters={this.state.counters
            .map((item) => item.price * item.value)
            .reduce((ac, cur) => ac + cur, 0)}
        />
        <main>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDeleteAll={this.handleDeleteAll}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
