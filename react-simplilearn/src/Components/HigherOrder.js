import React, { Component } from "react";

const UpdatedComponent = OriginalComp => {
    class NewComp extends Component {
        render() {
            return <OriginalComp name="The user"/>
        }
    }
    return NewComp;
}
export default UpdatedComponent;