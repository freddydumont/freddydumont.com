import React from 'react';
import Section from './Section';

const Portfolio = () => (
  <Section htmlId="portfolio">
    <h1 className="text-4xl text-gray-050 font-semibold mb-8">Portfolio</h1>
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
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
);

export default Portfolio;
