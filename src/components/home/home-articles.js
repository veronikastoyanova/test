import React from 'react';

const articles = [
  {
    title: 'Receive Accurate & Instant Quotes Within Milliseconds',
    content: 'Access to our very own predicative rate engine that self-adjusts to provide consistently accurate pricing for quick and precise quotes.'
  },
  {
    title: 'Easily & Efficiently Locate Loads Matching Preferred Routes',
    content: 'View thousands of loads with new orders uploaded daily and select a carrier from our growing list of over 10,000!'
  },
  {
    title: 'Automate & Manage Your Business\' Workflow Operations',
    content: 'Shippers and Carriers alike can join their individual TMS dashboards to help automate the auto transporting and car dispatching processes.'
  },
  {
    title: 'Automate the Pick-Up & Delivery Process with ePOD',
    content: 'Download the Driver ePOD app for paperless transactions, realtime updates on pick-ups and deliveries, and more - the perfect co-pilot for your transports. Available on iOS and Android now.'
  }
];

export default () => (
  <article className="home-articles">
    <h1 className="title">Here's why you should give Ship.Cars a spin:</h1>
    <div className="articles">
      {articles.map((article, i) => {
        return (
          <div key={i} className="article-box">
            <div className="article-icon"></div>
            <h3 className="article-title">{article.title}</h3>
            <p className="content">{article.content}</p>
          </div>
        );
      })}
    </div>
  </article>
);
