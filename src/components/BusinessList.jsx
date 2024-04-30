import React from "react";
import Business from "./Business";
import "./BusinessList.css";

const BusinessList = ({ businesses }) => {
  return (
    <div className="business-list">
      {businesses.map((business) => (
        <div>
          <Business key={business.id} business={business} />
          <Business key={business.id} business={business} />
          <Business key={business.id} business={business} />
        </div>
      ))}
    </div>
  );
};

export default BusinessList;
