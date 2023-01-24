import React, { Component } from "react";


class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = (event) => {
    alert(`You have submited: ${this.state.value}`);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
          {/*<p>Hello</p>*/}
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={(e) => this.handleChange(e)}
            //onChange={this.handleChange.bind(this)}
          />
          <input type="submit" value="Submit"/>
        </label>
      </form>
    );
  }
}

export default NameForm;
