import React from 'react';
import Section from './Section';
import nessia from '../assets/nessia.png';
import Button from './Button';

const Portfolio = () => (
  <Section htmlId="portfolio">
    <h1 className="text-4xl text-gray-100 font-semibold mb-8">Portfolio</h1>
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl bg-gray-800 border-teal-vivid-600 border-t-4 font-body">
      <div className="px-6 pt-4 pb-3">
        <div className="font-semibold text-gray-050 text-2xl tracking-wide">
          NessIA.ca
        </div>
      </div>
      <img
        className="h-64 w-full object-cover mb-4 rounded-sm"
        src={nessia}
        alt="nessia.ca homepage"
      />
      <div className="px-6 py-4">
        <div className="text-xl text-gray-100 mb-4">Business website</div>
        <div className="mb-4">
          <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            javascript
          </span>
          <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            react
          </span>
          <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            gatsby
          </span>
          <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            bulma
          </span>
        </div>
        <p className="text-gray-300 text-base text-justify hyphens">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <Button>go to project</Button>
    </div>
  </Section>
);

export default Portfolio;
