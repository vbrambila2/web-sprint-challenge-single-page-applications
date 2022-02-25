import React from "react";
import Restaurants from "./Restaurants";

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <h3>Add some CSS to your pizza by clicking the button below</h3>
      <div>
        <button>Click to Begin</button>
      </div>
      <Restaurants />
    </div>
  );
};

export default App;
