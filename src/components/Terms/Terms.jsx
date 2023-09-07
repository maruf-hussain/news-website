import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms And Condition</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis similique quod ipsa perferendis? Possimus reiciendis, nesciunt accusamus maiores dicta recusandae!</p>
            <p><Link to="/signup">Register</Link></p>
        </div>
    );
};

export default Terms;