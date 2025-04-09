import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Register.module.css';

const Register = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!user.username.trim()) newErrors.username = "Username is required";
        if (!user.email) newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(user.email)) newErrors.email = "Invalid email format";
        if (!user.password) newErrors.password = "Password is required";
        if (user.password !== user.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        console.log(user)

        try {
            const { confirmPassword, ...userData } = user;
            const response = await axios.post("http://localhost:8086/api/auth/register", userData, {
                headers: { "Content-Type": "application/json" }
            });
            console.log("Registration SuccessFull", response.data);
            alert("User Registered Successfully");
            navigate("/");
        } catch (error) {
            console.error("Error registering user", error);
            alert("Registration Failed");
        }
    };

    return (
        <div className={styles.registerContainer}>
            <form className={styles.registerForm} onSubmit={handleSubmit}>
                <h2 className={styles.heading}>Create Account</h2>

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    value={user.username}
                />
                {errors.username && <p className={styles.error}>{errors.username}</p>}

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={user.email}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={user.password}
                />
                {errors.password && <p className={styles.error}>{errors.password}</p>}

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    value={user.confirmPassword}
                />
                {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}

                <button type="submit">Register</button>
                <p className={styles.switchLink}>
                    Already have an account? <a href="/">Login</a>
                </p>
            </form>
        </div>
    );
           
};

export default Register;
