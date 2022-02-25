import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';

const StyledHome = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3em;

`

const StyledHomeOptions = styled.div
`
    display: flex;
    justify-content: space-around;
`

export default function Homepage() {
    return (
        <div>
            <StyledHome>
                <h3>Add some CSS to your pizza by clicking the button below</h3>
                <div>
                    <Link to="/pizza">Click to Begin</Link>
                </div>
            </StyledHome>
            <h4>Try some of our other fantastic partners!</h4>
            <StyledHomeOptions>
                <section>
                    <h3>Wild Willy's Wings</h3>
                    <p>10 new flavor options</p>
                </section>
                <section>
                    <h3>Bacon and Eggs</h3>
                    <p>Now open for dinner</p>
                </section>
                <section>       
                    <h3>T is for Tea</h3>
                    <p>Tea-rrific!</p>
                </section>
            </StyledHomeOptions>
      </div>
    )
}