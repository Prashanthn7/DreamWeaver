import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Registration = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({
            ...user, 
            [e.target.name]: e.target.value
        });
    }; 

    

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:8086/api/auth/register",user,{headers: { "Content-Type": "application/json" }});
            console.log("Registration SuccessFull", response.data);
            alert("User Registered Successfully");
            navigate("/login");
        }
        catch(error){
            console.log("Error registering user", error);
            alert("Registeration Failed");
        }    
    };
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}> 
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Register</button> 
            </form>
        </div>
    );
};

export default Registration;