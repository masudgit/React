import React, { Component } from "react";


class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Subscribe to Simplilearn",
      sub: "Subscribe",
    };
  }
  styles = {
    fontStyle: "italic",
    color: "purple",
  };
  ButtonChange = () => {
    this.setState({
      message: "Hit the bale icon to never miss on update",
      sub: "Subscrived",
    });
  };
  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
      </div>
    );
  }
}

export default NewComp;
