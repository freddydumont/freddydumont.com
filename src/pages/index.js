import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import SEO from '../../node_modules/@narative/gatsby-theme-novela/src/components/SEO';
import Logo from '../@narative/gatsby-theme-novela/components/Logo';
import social_header from '../assets/dumont_digital_logo.png';
import '../css/index.css';
import About from '../components/About';
import Portfolio from '../components/Portfolio';

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
  <span className="inline-block rounded-full px-2 bg-teal-vivid-200 text-teal-vivid-800 text-xs ml-2">
    soon(tm)
  </span>
);

const Index = () => (
  <>
    <SEO
      title="freddydumont | Full stack web application development"
      description="I'm a full stack web application developer helping startups turn ideas into reality. Click to find out how I can help you grow your business now!"
      image={social_header}
    />
    <main className="h-full bg-gray-900 pb-16 sm:pb-32">
      <section className="bg-pattern-circuits h-screen text-gray-050 font-mono flex items-center justify-center">
        <nav className="container mx-auto max-w-xs text-2xl -mt-32 p-6 leading-relaxed bg-gray-900">
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
      <About />
      <Portfolio />
    </main>
  </>
);

export default Index;
