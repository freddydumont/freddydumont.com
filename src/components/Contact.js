import React from 'react';
import Section from './Section';

const Label = ({ labelFor, children }) => (
  <label className="block tracking-wide mb-2 sm:text-lg" htmlFor={labelFor}>
    {children}
  </label>
);

const Contact = () => (
  <Section htmlId="contact" withContainer>
    <Section.Title>Contact</Section.Title>
    <Section.Body>Use the form below to send me an email.</Section.Body>
    <form className="w-full" data-netlify="true" method="post" name="contact">
      <input type="hidden" name="form-name" value="contact" />
      <div className="flex flex-wrap -mx-3 mb-12">
        <div className="w-full md:w-1/2 px-3 mb-12 md:mb-0">
          <Label labelFor="first-name">First Name*</Label>
          <input
            className="form-element"
            type="text"
            name="first-name"
            id="first-name"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <Label labelFor="last-name">Last Name</Label>
          <input
            className="form-element"
            type="text"
            name="last-name"
            id="last-name"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-12">
        <div className="w-full px-3">
          <Label labelFor="email">Email address*</Label>
          <input
            className="form-element"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-12">
        <div className="w-full px-3">
          <Label labelFor="message">Message*</Label>
          <textarea
            rows="8"
            className="form-element"
            name="message"
            id="message"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-end -mx-3 mb-12">
        <div className="w-full md:max-w-xs px-3">
          <button
            data-testid="button"
            type="submit"
            className="btn btn-gray hover:shadow-2xl"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  </Section>
);

export default Contact;
