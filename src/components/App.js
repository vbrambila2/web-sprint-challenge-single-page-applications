import React, { useState } from "react";
import Homepage from "./Homepage";
import Form from "./Form";
import { Route, Switch } from 'react-router-dom';
import schema from '../validation/formSchema';
import * as yup from 'yup';
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

const initialFormErrors = {
  name: '',
  phone: '',
  size: '',
  sauce: '',
  special: ''
}

const initialOrder = [];

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
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

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: 'name must be at least 2 characters' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
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
          <Form 
            values={formValues} 
            submit={formSubmit} 
            change={inputChange}
            errors={formErrors}
          />  
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
