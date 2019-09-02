import React from 'react';
import scrollTo from '../utils/scroll';
import Logo from '../@narative/gatsby-theme-novela/components/Logo';
import thumbnail from '../../content/authors/avatars/freddydumont.jpg';
import '../css/index.css';

/**
 * Menu items
 * @param {Object} props
 * @param {string} [props.to] href destination
 * @param {string} [props.clickDestination] onClick destination for `scrollTo`
 * @param {boolean} [props.isComingSoon] display soon (tm) badge
 * @param {string} props.children displayed string
 */
const ListItem = ({ to, clickDestination, isComingSoon, children }) => (
  // the div is there for the animated bg to stop when text ends
  <div className="flex items-center">
    <li className="cursor-pointer animated-item">
      {to && <a href={to}>{children}</a>}
      {clickDestination && (
        <button onClick={() => scrollTo(clickDestination)}>{children}</button>
      )}
    </li>
    {isComingSoon && <SoonBadge />}
  </div>
);

const SoonBadge = () => (
  <span className="inline-block rounded-full px-2 bg-teal-200 text-teal-800 text-xs ml-2">
    soon(tm)
  </span>
);

const Index = () => (
  <main className="h-full">
    <section className="main-bg h-screen text-gray-100 font-mono flex items-center justify-center">
      <nav className="container mx-auto max-w-xs text-2xl p-6 leading-relaxed bg-kinda-black">
        <div className="pb-6">
          <Logo />
        </div>
        <ul>
          <ListItem clickDestination="#about">about</ListItem>
          <ListItem to="/blog">blog</ListItem>
          <ListItem to="#" isComingSoon>
            portfolio
          </ListItem>
          <ListItem to="#" isComingSoon>
            contact
          </ListItem>
        </ul>
      </nav>
    </section>
    <section id="about" className="h-screen bg-kinda-black text-gray-100 pt-32">
      <div className="container mx-auto p-6">
        <img
          className="rounded-full h-16 w-16 mb-4"
          src={thumbnail}
          alt="frederick morin"
        />
        <h1 className="text-4xl font-semibold pb-6">Hey! I'm Frederick.</h1>
        <h3 className="text-2xl">
          I'm a full stack web application developer. I build things using all
          the latest tech.
        </h3>
      </div>
    </section>
  </main>
);

export default Index;
