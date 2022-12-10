import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    
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
            </div>
            <div>
        <label>LastName: </label> 
        <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>ConfirmPassword: </label>
                <input type="text" onChange={ (e) => setCPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>

        <p>First Name: {firstname}</p>
        <p>Last Name:{lastname}</p>
        <p>Email:{email}</p>
        </div>

    );
};
    
export default UserForm;
