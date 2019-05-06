import React, { Component } from 'react';

export default class Calc extends Component {
  state = {
    number: 0,
  }

  handleNumberChanged = ({ target }) => {
    this.setState({
      number: target.value,
    });
  }

  increase = () => {
    const { number } = this.state;
    const n = parseInt(number);

    if (isNaN(n)) return;

    const { increase } = this.props;
    increase(n);
  }

  decrease = () => {
    const { number } = this.state;
    const n = parseInt(number);

    if (isNaN(n)) return;

    const { decrease } = this.props;
    decrease(n);
  }

  render() {
    const { number } = this.state;
    const { counter } = this.props;

    return (
      <div>
        <div>{counter || 0}</div>
        <div>
          <label htmlFor="Number">Number</label>
          <input
            onChange={this.handleNumberChanged}
            type="number"
            name="Number"
            value={number}
          />
        </div>
        <div>
          <button onClick={this.increase}>
            +
          </button>
          <button onClick={this.decrease}>
            -
          </button>
        </div>
      </div>
    )
  }
}
