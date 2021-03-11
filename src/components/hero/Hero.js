import React from 'react'
import './Hero.css'
import image from '../../images/hero.jpg'
import logo from '../../images/logo.jpg'
import Form from '../form/Form'
import PhoneIcon from '@material-ui/icons/Phone';
import ErrorIcon from '@material-ui/icons/Error';
import HelpIcon from '@material-ui/icons/Help';
import MenuIcon from '@material-ui/icons/Menu';


function Hero() {
    return (
        <div className="hero">
            <div className="left">
                <img src={image} alt=""/>
            </div>
            <div className="right">
                <img src={logo} alt=""/>
                <Form/>
                <MenuIcon className="menu"/>
                <div className="icons">
                <PhoneIcon className="icon"/>
                <ErrorIcon className="icon"/>
                <HelpIcon className="icon"/>
                


            </div>
            </div>
        </div>
    )
}

export default Hero
