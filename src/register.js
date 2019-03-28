import React, { Component } from 'react';
import './App.css';


class Signup extends React.Component {
    render() {
        return (
            <div className="signup">
                   
                <div id="signup">
                		<div id="header">Sign Up</div>
                        <input type="text" id="uname" placeholder="User Name"/>
                       	<input type="password" id="password" placeholder="Password"/>
                       	<input type="email" id="email" placeholder="Email"/>                    	
                     	<input type="text" id="utype" placeholder="User Type"/>
                    	<button id="send">Register</button>
            	</div>
            </div>

        );
    }
}

export default Signup;