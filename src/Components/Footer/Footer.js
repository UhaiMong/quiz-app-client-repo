import React from 'react';
import { FaFacebook, FaGooglePlus, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';
import logo from '../../assets/logo/tyLogo.png'

const Footer = () => {
    return (
        <footer className="footer shadow-lg mb-5 rounded">
            <div className="footer-left col-md-4 col-sm-6">
                <p className="about">
                    <span> About the company</span> We are teaching online course. We have strong team href support you. Our company is the best in world online learning platform. We got ISO certified. We teach you, you do something different in your life.
                </p>
                <div className="icons">
                    <a href="#"><FaFacebook/></a>
                    <a href="#"><FaTwitter/></a>
                    <a href="#"><FaLinkedin/></a>
                    <a href="#"><FaGooglePlus/></a>
                    <a href="#"><FaInstagram/></a>
                </div>
            </div>
            <div className="footer-center col-md-4 col-sm-6">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>Chattogram</span> Chattogram, Blangladesh</p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p> (+880) 1747 233 890</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="#"> office@teach.com</a></p>
                </div>
            </div>
            <div className="footer-right col-md-4 col-sm-6">
                <h2> Teach-Yourself<span><img className='company-logo' src={logo} alt="logo" /></span></h2>
                <p className="menu">
                    <a href="#"> Home</a> |
                    <a href="#"> About</a> |
                    <a href="#"> Services</a> |
                    <a href="#"> Portfolio</a> |
                    <a href="#"> News</a> |
                    <a href="#"> Contact</a>
                </p>
                <p className="name"> Teach-Yourself &copy; 2022</p>
            </div>
        </footer>
    );
};

export default Footer;