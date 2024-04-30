import React from "react";
import "./Business.css";

const Business = ({ business }) => {
  return (
    <div className="business">
      <div className="image-container">
        <img src={business.image} alt={business.name} />
      </div>
      <h2>{business.name}</h2>
      <ul className="business-info">
        <li className="business-list-item">{business.address}</li>
        <li className="business-list-item">{business.city}</li>
        <li className="business-list-item">{business.state}</li>
        <li className="business-list-item">{business.zipcode}</li>
      </ul>
      <p>{business.category}</p>
      <div>
        <h3>{business.rating} stars</h3>
        <p>{business.reviewCount} reviews</p>
      </div>
    </div>
  );
};

export default Business;
