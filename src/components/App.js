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

const initialOrder = [];

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [order, setOrder] = useState(initialOrder);

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      phone: formValues.phone,
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ['pepperoni', 'pineapple', 'cheese', 'peanuts'].filter(topping => !!formValues[topping]),
      special: formValues.special.trim()
    }

    setOrder(order.concat(newOrder));
    setFormValues(initialFormValues);

    
  }
  console.log(order, "order");

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  return (
    <div>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path="/pizza">
          <Form values={formValues} submit={formSubmit} change={inputChange} />  
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
