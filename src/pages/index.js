import React from 'react';
import Logo from '../@narative/gatsby-theme-novela/components/Logo';
import '../css/index.css';

/**
 * Menu items
 * @param {Object} props
 * @param {string} props.to href destination
 * @param {string} props.children displayed string
 */
const ListItem = ({ to, children }) => (
  <li className="cursor-pointer animated-item">
    <a href={to}>{children}</a>
  </li>
);

const Index = () => (
  <main className="h-full">
    <section className="main-bg h-screen text-gray-100 font-mono flex items-center justify-center">
      <nav className="container mx-auto max-w-xs text-2xl p-6 leading-relaxed bg-kinda-black">
        <div className="pb-6">
          <Logo />
        </div>
        <ul>
          <ListItem to="#about">about</ListItem>
          <ListItem to="/blog">blog</ListItem>
          <ListItem to="#portfolio">portfolio</ListItem>
          <ListItem to="#contact">contact</ListItem>
        </ul>
      </nav>
    </section>
    <section id="about" className="h-screen">
      <div>some stuff</div>
    </section>
  </main>
);

export default Index;
