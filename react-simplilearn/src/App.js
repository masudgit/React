import React, { Component } from "react"
import NewComp from "./NewComp";
import "./App.css";
import SyntheticEvent from "./Components/SyntheticEvent";
import ListComp from "./Components/ListComp";
import NameForm from "./Components/NameForm";
class App extends Component {

    styles = {
        fontStyle: "bold",
        color: "teal"
    }

    render() {
        return (
            <div className="App">
                <h1 style={this.styles}>Welcome</h1>
                <NewComp />
                <SyntheticEvent />
                <ListComp />
                <NameForm />
            </div>
        )
    }
}
export default App;