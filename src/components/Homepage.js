import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import pizza from '../images/CartoonPizza.png';
import '../App.css';

const StyledHome = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.7em;
    padding: 0 1em 0 1em;
    background-color: #fffff6;
    color: black;
    font-size: 1.3em;
`

const StyledHomeOptions = styled.div
`
    display: flex;
    justify-content: space-around;
    border-radius: 0.5em;
    background-color: #330000;
`

export default function Homepage() {
    return (
        <div className="homepage">
            <StyledHome>
                <h3>Add some CSS to your pizza by clicking the button below</h3>
            </StyledHome>
            <section className="pizza-link-section">
                <ArrowRightIcon fontSize="large"/>
                <ArrowRightIcon fontSize="large"/>
                <ArrowRightIcon fontSize="large"/>
                <div className="pizza-btn">
                    <Link id="order-pizza" to="/pizza">Click to Begin</Link>
                </div>
                <ArrowLeftIcon fontSize="large" />
                <ArrowLeftIcon fontSize="large" />
                <ArrowLeftIcon fontSize="large" />
            </section>
            <img src={pizza} alt="cartoon pizza" className="pizza-image" />
            <h4>Try some of our other fantastic partners!</h4>
            <StyledHomeOptions>
                <section className="options">
                    <h3>Wild Willy's Wings</h3>
                    <p>10 new flavor options</p>
                </section>
                <section className="options">
                    <h3>Bacon and Eggs</h3>
                    <p>Now open for dinner</p>
                </section>
                <section className="options">       
                    <h3>T is for Tea</h3>
                    <p>Tea-rrific!</p>
                </section>
            </StyledHomeOptions>
      </div>
    )
}