import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './DreamList.module.css';

const DreamList = () => {
    const [dreams, setDreams] = useState([
        "Doctor",
        "Engineer",
        "Teacher",
        "Scientist",
        "Artist",
        "Entrepreneur",
        "Pilot",
        "Writer",
        "Musician",
        "Athlete",
        "Software Developer",
        "Astronaut",
        "Chef",
        "Photographer",
        "Fashion Designer"
    ]
    );
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDreams = async () => {
            try {
                const response = await axios.get('http://localhost:8086/api/careers');
                setDreams(response.data);
            } catch (error) {
                console.error('Error fetching dreams:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDreams();
    }, []);

    if (loading) return <p className={styles.loading}>Loading dreams...</p>;

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>All Dreams</h2>
            <div className={styles.grid}>
                {dreams.map((item, index) => (
                    <div key={index} className={styles.card}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DreamList;
