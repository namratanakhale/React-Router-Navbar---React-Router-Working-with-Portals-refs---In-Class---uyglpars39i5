import React from 'react'
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div id='aboutus-page'>
            Welcome to About Us Page<br />
            <button><Link to='/'>Go back</Link></button>
        </div>
    )
}
export default AboutUs;