import React from 'react';
import styled from 'styled-components';
import HeroPicture from './herobg.jpg';

const Navbar = styled.div`
  color: palevioletred;
  background: papayawhip;
`;

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
      <Navbar>Navbar Logo !</Navbar>
    </HeroBG>
  );
}

export default Hero;
