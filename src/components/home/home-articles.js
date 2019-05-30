import React from 'react';

const articles = [
  {
    title: 'Access to Calcatron Calculator',
    content: 'Our very own predicative rate engine that self-adjust to provide consistently accurate pricing for quick and precise quotes.'
  },
  {
    title: 'Join the Market Loadboard',
    content: 'Access thousands of loads with new orders uploaded daily and select a carrier from our growing list of over 10,000!'
  },
  {
    title: 'Experience Shipper & Carrier Dashboards',
    content: 'Shippers and Carriers alike can access their individual CRM and TMS dashboards to help automate the auto transporting and car dispaching processes.'
  },
  {
    title: 'Download the ePOD App',
    content: 'Available on IOS and Android, download Driver app for paperless transactions, realtime updates on pick-ups and deliveries, and more - the perfect co-pilot for your transports.'
  }
];

export default () => (
  <article >
    <h1 className="title">Here's why you should give Ship.Cars a spin:</h1>
    <div className="articles">
      {articles.map((article, i) => {
        return (
          <div key={i} className="article-box">
            <h3 className="article-title">{article.title}</h3>
            <p className="content">{article.content}</p>
          </div>
        )
      })}
    </div>
  </article>
);
