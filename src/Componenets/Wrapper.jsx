import React from 'react';
import Intro from './Intro';
import HeaderLogo from './HeaderLogo';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import Copyright from './Copyright';
import Bg from './Bg';
import Script from './Scripts';

export default function Wrapper() {
    return (
        <div id='wrapper' className='fade-in'>
            <Intro />
            <HeaderLogo />
            <Navbar />
            <Main />
            <Footer />
            <Copyright />
            <Bg />
            <Script />
        </div>
    ); 
}