import React from "react";
import PeopleAlsoViewed from "./PeopleAlsoViewed";

const Shirts = ({ shirts }) => (
  <div className="container">
    <div className="titleContainer">
      <h3>People also viewed</h3>
    </div>
    <div className="pplViewedContainer">
      {shirts.map(shirt => (
        <PeopleAlsoViewed key={shirt._id} item={shirt} />
      ))}
    </div>
  </div>
);

export default Shirts;
