import { render } from "@testing-library/react";
import React from "react";

function Functionrops(props) {
  return (
    <div>
      <h3>This is functional Component</h3>,
      <h3>
        Hello {props.name} from {props.place}! Welcome to Simplilearn
      </h3>
    </div>
  );
}
export default Functionrops;
