import React, { useState, useEffect } from "react";
import Homepage from "./Homepage";
import Form from "./Form";
import Confirmation from "./Confirmation";
import { Switch, Route } from 'react-router-dom';
import schema from '../validation/formSchema';
import * as yup from 'yup';
import axios from 'axios';
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

  const getOrders = () => {
    axios.get(`https://reqres.in/api/orders`)
      .then(res => {
        setOrder(res.data);
      })
      .catch(err => console.error(err))
  }

  const postNewOrder = newOrder => {
    axios.post(`https://reqres.in/api/orders`, newOrder)
      .then(res => {
        setOrder(res.data, ...order);
        setFormValues(initialFormValues);
      })
      .catch(err => console.error(err))
  }

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

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      phone: formValues.phone,
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ['pepperoni', 'pineapple', 'cheese', 'peanuts'].filter(topping => !!formValues[topping]),
      special: formValues.special.trim()
    }

    console.log(order, "order");

    postNewOrder(newOrder)
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <div className="app-home">
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path="/confirmation"><Confirmation values={formValues} /></Route>
        <Route path="/pizza"> <Form values={formValues} submit={formSubmit} change={inputChange}errors={formErrors} /></Route>
        <Route exact path="/"><Homepage /></Route>
      </Switch>
    </div>
  );
};

export default App;
