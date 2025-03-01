import React, { useState } from 'react';
import '../styles/ItinerarySection.css';

function ItinerarySection() {
  const itinerary = [
    {
      day: 'Day 1 - Nov 14th',
      title: 'Arrival and First Game Drive',
      description: 'Our drivers would pick you up from JKIA airport at 7AM. ...',
      images: ['images/image1.png', 'images/image2.png'],
    },
    {
      day: 'Day 2 - Nov 15th',
      title: 'Morning and Afternoon Game Drives',
      description: 'Wake up early for a morning game drive and bush breakfast. ...',
      images: ['images/image3.png', 'images/image4.png'],
    },
    {
      day: 'Day 3 - Nov 16th',
      title: 'Full Day Game Drive',
      description: 'Today you would be going towards the border of Maasai Mara. ...',
      images: ['images/image5.png', 'images/image6.png'],
    },
    {
      day: 'Day 4 - Nov 17th',
      title: 'Departure',
      description: 'Wake up at leisure, have a nice and heavy breakfast while you discuss about your experience with your group. ...',
      images: ['images/image7.png', 'images/image8.png'],
    }
  ];

  const [expandedDay, setExpandedDay] = useState(null);

  const handleDayClick = (day) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <div className="itinerary-section">
        <div className="section">
      <h2>Itinerary</h2>
      {itinerary.map((dayItem) => (
        <div className="itinerary-day" key={dayItem.day}>
          <div className="day-header" onClick={() => handleDayClick(dayItem.day)}>
            <h3>{dayItem.day} - {dayItem.title}</h3>
            <span>{expandedDay === dayItem.day ? '-' : '+'}</span>
          </div>
          {expandedDay === dayItem.day && (
            <div className="day-content">
              <p>{dayItem.description}</p>
              <div className="image-gallery">
                {dayItem.images.map((img, index) => (
                  <img key={index} src={img} alt={`Day ${index + 1}`} />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>

  );
}

export default ItinerarySection;
