import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div id='home-page'>
            Welcome to Home Page<br />
            <button><Link to='/'>Go back</Link></button>
        </div>
    )
}
export default Home;