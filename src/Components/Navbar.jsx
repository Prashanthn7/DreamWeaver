import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div className={styles.logo}>Dream Viewer</div>

            <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'dreams'}>Dream</Link></li>
            </ul>

            <div className={styles.userSection} onClick={() => setUserDropdownOpen(!userDropdownOpen)}>
                <FaUserCircle className={styles.userIcon} />
                {userDropdownOpen && (
                    <div className={styles.userDropdown}>
                        <span>name</span>
                        <span>email</span>
                        <Link to={''}>Logout</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
