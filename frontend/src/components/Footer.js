import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return (
            <div className="Footer">
                 <h3>MEDONA</h3>
                <div className="Footer-col1">
                   
                    
                    <ul className="Footer-list">
                        <li className="list-head">CONTACT WITH US</li>
                        <li><i class="fas fa-mobile"></i> +91 9876543210</li>
                        <li><i class="far fa-envelope"></i> help@medona.com</li>
                        <li><i class="fas fa-building"></i>Delhi,India</li>
                    </ul>
                    
                </div>
                <div className="Footer-col2">
                    <h4>FOLLOW US ON</h4>
                <ul className="Footer-list list2">
                        <li><a><i class="fab fa-facebook-square"></i></a></li>
                        <li><a><i class="fab fa-twitter-square"></i></a></li>
                        <li><a><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
                
            </div>
        );
    }
}

export default Footer;