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
    background-color: #fffff6;
    border: solid 0.5em black;
    border-radius: 0.5em;
    padding: 3em;
`

export default function Form(props) {
    const { values, submit, change, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = e => {
        const { name, value, type, checked } = e.target;
        const valueUsed = type === "checkbox" ? checked : value;
        change(name, valueUsed);
    }

    return (
        <div className="form-page">
            <Link to="/" className="home-btn">Home</Link>
            <StyledForm>
                <form id="pizza-form" onSubmit={onSubmit}>
                    <div className='errors'>
                        <div>{errors.name}</div>
                        <div>{errors.phone}</div>
                        <div>{errors.size}</div>
                        <div>{errors.sauce}</div>
                        <div>{errors.special}</div>
                    </div>
                    <label>Name:
                        <input 
                            id="name-input"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={values.name}
                            onChange={onChange}
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
                            onChange={onChange}
                        />
                    </label>
                    <br />
                    <label>Size:
                        <select
                            id="size-dropdown"
                            name="size"
                            value={values.size}
                            onChange={onChange}
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
                            onChange={onChange}
                        >
                            <option value="">select</option>
                            <option value="red">Red</option>
                            <option value="white">White</option>
                            <option value="mayo">Mayo</option>
                            <option value="none">None</option>
                        </select>
                    </label>
                    <br />
                    <section className="toppings">Toppings: 
                        <br />
                        <div className="spacer"></div>
                        <input type="checkbox" id="pepperoni" name="pepperoni" checked={values.pepperoni} onChange={onChange} />
                        <label>Pepperoni</label>
                        <br/>
                        <input type="checkbox" id="pineapple" name="pineapple" checked={values.pineapple} onChange={onChange} />
                        <label>Pineapple</label>
                        <br/>
                        <input type="checkbox" id="cheese" name="cheese" checked={values.cheese} onChange={onChange} />
                        <label>Cheese</label>
                        <br/>
                        <input type="checkbox" id="peanuts" name="peanuts" checked={values.peanuts} onChange={onChange} />
                        <label>Peanuts</label>
                    </section>
                    <br />
                    <label className="special">Special Instructions:
                        <br />
                        <textarea
                            id="special-text"
                            name="special"
                            value={values.special}
                            onChange={onChange}
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