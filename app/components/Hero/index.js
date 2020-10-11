import React from 'react';
import styled from 'styled-components';
import HeroPicture from './herobg.jpg';
import styles from './Hero.css';

const HeroBG = styled.div`
  /* background: papayawhip; */
  background-image: url(${HeroPicture});

  /* Full height */
  height: 100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

function Hero() {
  return (
    <HeroBG>
      {/* <Navbar>Navbar Logo !</Navbar> */}
      <header className={styles.header}>
        <a href="https://github.com" className={styles.logo}>
          Cv Logo
        </a>
        <input className={styles.menuBtn} type="checkbox" id="menu-btn" />
        <label className={styles.menuIcon} htmlFor="menu-btn">
          <span className={styles.navicon} />
        </label>
        <ul className={styles.menu}>
          <li>
            <a href="https://github.com">Features</a>
          </li>
          <li>
            <a href="https://github.com">About</a>
          </li>
          <li>
            <a href="https://github.com">Login</a>
          </li>
          <li>
            <a href="https://github.com" className={styles.signUp}>
              Sign Up
            </a>
          </li>
        </ul>
      </header>
    </HeroBG>
  );
}

export default Hero;
