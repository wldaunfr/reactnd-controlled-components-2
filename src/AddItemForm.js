import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddItemForm extends Component {
  static propTypes = {
    onAddItem: PropTypes.func.required
  };

  state = {
    value: ''
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    )
  }
}

export default AddItemForm;
