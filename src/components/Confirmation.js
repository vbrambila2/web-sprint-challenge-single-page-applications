import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';

const StyledCon = styled.div
`
    border: solid 0.2em black;
    border-radius: 0.5em;
    background-color: #fffff6;
    padding: 2em;
    margin: 1em;
    height: 100%;
    font-size: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function Confirmation(props) {
    const { values } = props;

    const pep = () => {
        if (values.pepperoni === true) {
            return "pepperoni";
        } else {
            return "";
        }
    }
    const pine = () => {
        if (values.pineapple === true) {
            return "pineapple";
        } else {
            return "";
        }
    }
    const chee = () => {
        if (values.cheese === true) {
            return "cheese";
        } else {
            return "";
        }
    }
    const pea = () => {
        if (values.peanuts === true) {
            return "peanuts";
        } else {
            return "";
        }
    }

    return (
        <div className="con-page">
            <Link to="/" className="home-btn">Home</Link>
            <StyledCon>
                <div>Your order is in!</div>
                <div className="spacer"></div>
                <div>Name: { values.name }</div>
                <div>Phone: { values.phone }</div>
                <div>Size: { values.size }</div>
                <div>Sauce: { values.sauce }</div>
                <div>Toppings:</div>
                <div>{ pep() }</div>
                <div>{ pine() }</div>
                <div>{ chee() }</div>
                <div>{ pea() }</div>
                <div>Special Instructions:</div>
                <div>{ values.special }</div>
            </StyledCon>
        </div>
    )
}