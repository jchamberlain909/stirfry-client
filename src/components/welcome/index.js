import React from 'react';
import Button from '@material-ui/core/Button';
import './welcome.css'
import LocalDining from "@material-ui/icons/LocalDining";
import { Link } from 'react-router-dom'

const MyLink = props => <Link to="/recipe" {...props} />


const Welcome = () => {
    return ( 
    <div id="welcome">
        <h1 id="title">StirFry.me</h1>
        <img src="/robot.png" alt="robot"/> 
        <Button variant="contained" color="primary" size="large" component={MyLink}>
            Get Cooking!
            <LocalDining className="fork-knife"></LocalDining>

        </Button>
    </div> );
}
 
export default Welcome;