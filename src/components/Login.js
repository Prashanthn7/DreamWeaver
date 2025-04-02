import React,{useState} from "react";

const Login = () => {
    const[user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Logging in:",user);
    };

    return (
        <div>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
    </div>
    );
};

export default Login;