import React from 'react';
import Link from 'gatsby-link';
import magnifyImage from '../../img/help-center-magnify.svg';
import './GlossaryPartial.scss';

const GlossaryPartial = () => (
  <div className="home-glossary">
    <div className="container home-glossary__container">
      <h2>Glossary</h2>
      <p className="ta-center">Not sure what something means? Find terms from our library sorted A-Z.</p>
      <div className="row">
        <div className="col-md-8">
          <div className="card card--glossary is-thin">
            <h3 className="card__title">Featured Terms</h3>
            <Link className="glossary-link" to="/">lorem ipsum</Link>
            <Link className="glossary-link" to="/">lorem ipsum</Link>
            <Link className="glossary-link" to="/">lorem ipsum</Link>
            <Link className="btn btn-primary" to="/">View All</Link>
          </div>
        </div>
        <div className="col-md-4">
          <img className="glossary-icon" src={magnifyImage} alt="SendGrid Glossary" />
        </div>
      </div>
    </div>
  </div>
);


export default GlossaryPartial;