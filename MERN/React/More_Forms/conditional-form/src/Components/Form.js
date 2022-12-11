import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    
    const checkFname =()=> {
        if(firstname.length<3 && firstname.length>0){
            return "First Name Must Be At Least 2 characters";
        }
    };


    const checkLname =()=> {
        if(lastname.length<2 && lastname.length>0){
            return "Last Name Must Be At Least 2 characters";
        }
    };


    const checkEmail =()=> {
        if(email.length<2 && email.length>0){
            return "Email Must Be At Least 2 characters";
        }
    };


    const checkPassword =()=> {
        if(password.length<8 && password.length>0){
            return "Password Must Be At Least 8 characters";
        }
    };


    const checkCPassword =()=> {
        if(password !== cpassword){
            return "Password and confirmation Must Be matched";
        }
    };

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
        <label>FirstName: </label> 
        <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
        <p>{checkFname()}</p>
            </div>
            <div>
        <label>LastName: </label> 
        <input type="text" onChange={ (e) => setLastname(e.target.value) } />
        <p>{checkLname()}</p>

            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                <p>{checkEmail()}</p>

            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                <p>{checkPassword()}</p>

            </div>
            <div>
                <label>ConfirmPassword: </label>
                <input type="text" onChange={ (e) => setCPassword(e.target.value) } />
                <p>{checkCPassword()}</p>
            </div>
            <input type="submit" value="Create User" />
        </form>
        </div>

    );
};
    
export default UserForm;
