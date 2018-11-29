import React from "react";
import styles from "../style.css.js";

class Quantity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement() {
    if (this.state.counter === 1) {
      alert("Quantity cannot be less than 1");
    } else {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }

  render() {
    return (
      <div className="quantity-wrapper">
        <div style={styles.quantity}>Quantity</div>
        <div className="button-wrapper">
          <button
            style={styles.button}
            type="button"
            onClick={this.decrement}
            data-test="inc-button"
          >
            -
          </button>
          <input
            style={styles.input}
            type="text"
            name="quantity"
            value={this.state.counter}
            readOnly
          />
          <button
            style={styles.button}
            type="button"
            onClick={this.increment}
            data-test="dec-button"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Quantity;
