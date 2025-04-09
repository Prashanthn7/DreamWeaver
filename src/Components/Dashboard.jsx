import React, { useState } from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const [dream, setDream] = useState('');
    const [careerList, setCareerList] = useState([]);

    // Submit dream to backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!dream.trim()) return;

        try {
            // let res = await axios.post('http://localhost:8086/api/careers', { dream });
            setDream('');
            setCareerList([
                "Become a full-stack developer",
                "Work at Google",
                "Launch my own startup",
                "Become a tech speaker",
                "Mentor aspiring developers"
            ]) // Refresh list after adding
        } catch (err) {
            console.error("Error submitting dream:", err);
        }
    };

    return (
        <div className={styles.dashboardContainer}>
            <h2>Share Your Dream</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <textarea
                    placeholder="Write your dream..."
                    value={dream}
                    onChange={(e) => setDream(e.target.value)}
                    rows={4}
                />
                <button type="submit">Submit</button>
            </form>

            <ul className={styles.careerList}>
                {careerList.map((item, index) => (
                    <li key={index} className={styles.listItem}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
