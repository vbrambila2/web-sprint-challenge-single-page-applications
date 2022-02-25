import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';

const StyledForm = styled.div
`
    display: flex;
    justify-content: center;
    padding: 1em;
    margin: 1em;
`

export default function Form(props) {
    const { values, submit } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <div>
            <Link to="/" className="home-btn">Home</Link>
            <StyledForm>
                <form id="pizza-form" onSubmit={onSubmit}>
                    <label>Name:
                        <input 
                            id="name-input"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={values.name}
                        />
                    </label>
                    <br />
                    <label>Phone Number:
                        <input 
                            type="tel"
                            name="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="123-456-7890"
                            value={values.phone}
                        />
                    </label>
                    <br />
                    <label>Size:
                        <select
                            id="size-dropdown"
                            name="size"
                            value={values.size}
                        >
                            <option value="">select</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </label>
                    <br />
                    <label>Sauce:
                        <select
                            name="sauce"
                            value={values.sauce}
                        >
                            <option value="">select</option>
                            <option value="red">Red</option>
                            <option value="white">White</option>
                            <option value="mayo">Mayo</option>
                            <option value="none">None</option>
                        </select>
                    </label>
                    <br />
                    <div className="toppings">Toppings: 
                        <br />
                        <div className="spacer"></div>
                        <input type="checkbox" id="pepperoni" name="pepperoni" checked={values.pepperoni} />
                        <label>Pepperoni</label>
                        <br/>
                        <input type="checkbox" id="pineapple" name="pineapple" checked={values.pineapple} />
                        <label>Pineapple</label>
                        <br/>
                        <input type="checkbox" id="cheese" name="cheese" checked={values.cheese} />
                        <label>Cheese</label>
                        <br/>
                        <input type="peanuts" id="peanuts" name="peanuts" checked={values.peanuts} />
                        <label>Peanuts</label>
                    </div>
                    <br />
                    <label className="special">Special Instructions:
                        <br />
                        <div className="spacer"></div>
                        <textarea
                            id="special-text"
                            name="special"
                            value={values.special}
                        >
                        </textarea>
                    </label>
                    <br />
                    <button id="order-button">Complete Order</button>
                </form>
            </StyledForm>
        </div>
    )
}