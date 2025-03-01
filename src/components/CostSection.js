import React, { useState } from 'react';
import '../styles/CostSection.css';

function CostSection() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [discount, setDiscount] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  const calculateCost = () => {
    let adultCost = discount ? 1322 : 1582;
    let childCost = discount ? 1127 : 1400;
    let newTotalCost = adults * adultCost + children * childCost;
    setTotalCost(newTotalCost);
  };

  return (
    <div className="cost-section">
      <h2>Trip Costs</h2>
      <div className="cost-inputs">
        <label>Adults:</label>
        <input type="number" value={adults} onChange={(e) => setAdults(parseInt(e.target.value))} />
        <label>Children (4-9):</label>
        <input type="number" value={children} onChange={(e) => setChildren(parseInt(e.target.value))} />
        <label>Discount (Before Aug 14th):</label>
        <input type="checkbox" checked={discount} onChange={(e) => setDiscount(e.target.checked)} />
        <button onClick={calculateCost}>Calculate Total</button>
      </div>
      <p className="total-cost">Total: ${totalCost}</p>
    <div className="cost-trigger">
        <p>Interested? Let's personalize your trip!</p>
        <button>Contact Us for a Custom Quote</button>
      </div>
      </div>

  );
}

export default CostSection;
