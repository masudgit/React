import React from 'react';
import './App.css';
import Classprops from "./Classprops";
import Functionrops from "./Functionprop";

function App() {
  return (
    <div>
      <Classprops name="Ikbal" place="Place1">
        <p>Hi Ikbal</p>
      </Classprops>
      <Classprops name="Ikbal1" place="Place2">
        <button>Click</button>
      </Classprops>
      <Classprops name="Ikbal2" place="Place3"/>

      <Functionrops name="Ikbal3" place="Place4"/>
    </div>
  );
}

export default App;
