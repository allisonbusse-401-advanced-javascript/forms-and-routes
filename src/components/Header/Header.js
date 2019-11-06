import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';


const Header = () => (
  <>
    <h1 className={styles.Header}>The Last Airbender</h1>
    <nav>
      <Link to="/">Home</Link> 
      <Link to="/list">All Characters</Link>
    </nav>
  </>
);



export default Header;
