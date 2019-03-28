import React, { Component } from 'react';
import './App.css';
class App extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            email: '',
            usertype: '1'
        }
    }


    submit = () => {

        var username = this.refs.uname.value;
        var password = this.refs.pwd.value;
        var email = this.refs.email.value;
        var utype = this.refs.utype.value;
        var pwdFormat=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
        var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(username===""|| password===""||email===""|| utype===""){
            alert("Please fill all the details");
        }
        else if(username.length<8){
            alert("Username must be 8 characters long.");
        }
        else if(!password.match(pwdFormat)){
            alert("Password must contain atleast one capital letter,small letter,number,special character.");
        }
        else if(password.length<8){
            alert("Password must be 8 characters long.");
        }
        else if(!email.match(emailFormat)){
        alert("Please enter a valid email address");
        }
        else{
        fetch("http://cvhunt.com/API/signupinfo", {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email,
                    usertype: utype
                })
            })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                alert(response.message);
            })
            .catch(error => console.log("error".error));
          }
    }

    render() {
        return (
            <div className="signup">
                   
                <div id="signup">
                    <div id="header">Sign Up</div>
                        <input type="text" id="uname" placeholder="User Name" 
                        ref="uname"/>
                        <input type="password" id="password" placeholder="Password"
                        ref="pwd"/>
                        <input type="email" id="email" placeholder="Email"
                         ref="email"/>                      
                        <input type="text" id="utype" placeholder="User Type" ref="utype"/>
                        <button id="send" onClick={this.submit}>Register</button>
              </div>
            </div>
        );
    }
}

export default App;