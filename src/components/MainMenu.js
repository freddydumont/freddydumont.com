import React from 'react';
import MenuItem from './MainMenuItem';

const MainMenu = () => (
  <ul>
    <MenuItem clickDestination="#about">about</MenuItem>
    <MenuItem to="/blog">blog</MenuItem>
    <MenuItem clickDestination="#portfolio">portfolio</MenuItem>
    <MenuItem clickDestination="#contact">contact</MenuItem>
  </ul>
);

export default MainMenu;
