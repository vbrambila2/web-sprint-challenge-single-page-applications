import React, { useState } from "react";
import Homepage from "./Homepage";
import Form from "./Form";
import { Route, Switch } from 'react-router-dom';
import '../App.css';

const initialFormValues = {
  name: "",
  phone: "",
  size: "",
  sauce: "",
  pepperoni: false,
  pineapple: false,
  cheese: false,
  peanuts: false,
  special: ""
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <div>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path="/pizza">
          <Form values={formValues} submit={formSubmit} />  
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
