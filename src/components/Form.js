import React from 'react';

export default function Form() {
    return (
        <div>
            <form id="pizza-form">
                <label>Name
                    <input 
                        id="name-input"
                        type="text"
                        name="name"
                    />
                </label>
                <label>Phone Number
                    <input 
                        type="tel"
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="123-456-7890"
                    />
                </label>
                <label>Size
                    <select
                        id="size-dropdown"
                        name="size"
                    >
                        <option disabled selected value>select an option</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                <label>Sauce
                    <select
                        name="sauce"
                    >
                        <option disabled selected value>select an option</option>
                        <option value="red">Red</option>
                        <option value="white">White</option>
                        <option value="mayo">Mayo</option>
                        <option value="none">None</option>
                    </select>
                </label>
                <label>Toppings
                    <input 
                        type="checkbox"
                        name="toppings"
                        value="Pepperoni"
                    />Pepperoni
                    <input 
                        type="checkbox"
                        name="toppings"
                        value="Pineapple"
                    />Pineapple
                    <input 
                        type="checkbox"
                        name="toppings"
                        value="Cheese"
                    />Cheese
                    <input 
                        type="checkbox"
                        name="toppings"
                        value="Peanuts"
                    />Peanuts
                </label>
                <label>Special Instructions
                    <textarea
                        id="special-text"
                        name="special"
                        rows="4"
                        cols="50"
                    >
                    </textarea>
                </label>
                <button id="order-button">Complete Order</button>
            </form>
        </div>
    )
}