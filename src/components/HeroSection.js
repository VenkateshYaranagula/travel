import React, { useState } from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  const [showExplore, setShowExplore] = useState(false);

  const handleExploreClick = () => {
    setShowExplore(!showExplore);
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Big Cats Week at Maasai Mara</h1>
        <p>Celebrate Diwali with an unforgettable wildlife adventure.</p>
        <div className="explore-trigger" onClick={handleExploreClick}>
          {showExplore ? 'Hide Details' : 'Explore the Adventure'}
          {showExplore && (
            <div className="explore-details">
              <p>Discover the magic of Maasai Mara in November.</p>
              <button className="view-itinerary">View Itinerary</button>
              <button className="map-trigger">See the Mara on Map</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;