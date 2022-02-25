import React from "react";
import Homepage from "./Homepage";
import Form from "./Form";
import { Route, Switch } from 'react-router-dom';
import '../App.css';

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path="/pizza">
          <Form />  
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
