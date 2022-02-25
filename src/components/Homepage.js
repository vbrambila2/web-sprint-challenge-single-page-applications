import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
    return (
        <div>
            <h3>Add some CSS to your pizza by clicking the button below</h3>
            <div>
                <Link to="/pizza">Click to Begin</Link>
            </div>
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
      </div>
    )
}