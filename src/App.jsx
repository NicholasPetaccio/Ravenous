import React from "react";
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";
import "./App.css";

const sampleBusinesses = [
  {
    id: 1,
    imageSrc: "https://via.placeholder.com/500",
    name: "Example Restaurant 1",
    address: "123 Main St",
    city: "Hometown",
    state: "CA",
    zipcode: "90210",
    category: "Italian",
    rating: 4.2,
    reviewCount: 88,
  },
];

function App() {
  return (
    <div>
      <h1 className="header">Feeling Hungry?</h1>
      <SearchBar />
      <BusinessList businesses={sampleBusinesses} />
    </div>
  );
}

export default App;
