import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!user.email) newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(user.email)) newErrors.email = "Invalid email format";
        if (!user.password) newErrors.password = "Password is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        console.log(user)

        try {
            const response = await axios.post("http://localhost:8086/api/auth/login", user, {
                headers: { "Content-Type": "application/json" }
            });
            console.log("Login Successful", response.data);
            alert("Login Successful");
            localStorage.setItem('token', 'user-logged-in');
            navigate("/dashboard"); // Change this route as needed
        } catch (error) {
            console.error("Login Failed", error);
            alert("Invalid email or password");
        }
    };

    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <h2 className={styles.heading}>Login</h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                />
                {errors.password && <p className={styles.error}>{errors.password}</p>}

                <button type="submit">Login</button>
                <p className={styles.switchLink}>
                    Don't have an account? <Link to="/register">Create account</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
