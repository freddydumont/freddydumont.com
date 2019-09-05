import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import scrollTo from '../utils/scroll';
import SEO from '../../node_modules/@narative/gatsby-theme-novela/src/components/SEO';
import Logo from '../@narative/gatsby-theme-novela/components/Logo';
import social_header from '../assets/dumont_digital_logo.png';
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

const Index = ({ data }) => (
  <>
    <SEO image={social_header} />
    <main className="h-full bg-near-black">
      <section className="main-bg h-screen text-gray-100 font-mono flex items-center justify-center">
        <nav className="container mx-auto max-w-xs text-2xl -mt-32 p-6 leading-relaxed bg-near-black">
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
      <section
        id="about"
        className="h-screen bg-near-black text-gray-100 pt-32"
      >
        <div className="container mx-auto max-w-lg md:max-w-2xl lg:max-w-4xl p-6">
          <Img
            fluid={data.author.avatar.childImageSharp.fluid}
            className="rounded-full h-24 w-24 mb-4 -ml-1"
            alt="frederick morin"
          />
          <h1 className="text-3xl font-semibold mb-4">{data.author.bio}</h1>
          <p className="text-xl">
            I'm currently building this website. Check out{' '}
            <a
              href="/blog"
              className="text-teal-500 hover:text-teal-400 cursor-pointer"
            >
              my blog
            </a>{' '}
            in the meantime.
          </p>
        </div>
      </section>
    </main>
  </>
);

export const query = graphql`
  query {
    author(name: { eq: "Frederick Morin" }) {
      bio
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
