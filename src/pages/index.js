import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import SEO from '../../node_modules/@narative/gatsby-theme-novela/src/components/SEO';
import Logo from '../@narative/gatsby-theme-novela/components/Logo';
import social_header from '../assets/dumont_digital_logo.png';
import '../css/index.css';
import Section from '../components/Section';

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

const Index = ({ data }) => (
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
      <Section htmlId="about">
        <Img
          fluid={data.author.avatar.childImageSharp.fluid}
          className="rounded-full h-24 w-24 mb-8 -ml-1 shadow-outline-teal"
          alt="frederick morin"
        />
        <h1 className="text-gray-050 text-2xl sm:text-4xl font-semibold mb-4">
          Hi!{' '}
          <span role="img" aria-label="Waving Hand Sign">
            👋
          </span>{' '}
          I'm Frederick Morin.
        </h1>
        <h3 className="text-xl sm:text-2xl mb-4">
          I'm a full stack web application developer helping teams and startups
          turn ideas into reality.{' '}
          <a
            href="https://www.linkedin.com/in/freddydumont/"
            className="text-teal-vivid-500 hover:text-teal-vivid-400 hover:underline cursor-pointer"
          >
            Get in touch now
          </a>{' '}
          to learn how I can help you grow your business with software.
        </h3>
      </Section>
      <Section htmlId="portfolio">
        <h1
          id="portfolio"
          className="text-4xl text-gray-050 font-semibold mb-8"
        >
          Portfolio
        </h1>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
          <div className="px-6 pt-4 pb-2">
            <div className="font-bold text-xl">GitKraken</div>
          </div>
          <img
            className="w-full"
            src="https://freddydumont.com/static/d69ac4c65c5ce58fe330a828e2f6d7ad/e998e/git_gui.png"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <p className="text-gray-500 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #winter
            </span>
          </div>
        </div>
      </Section>
    </main>
  </>
);

export const query = graphql`
  query {
    author(name: { eq: "Frederick Morin" }) {
      avatar {
        childImageSharp {
          fluid(maxWidth: 522) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default Index;
