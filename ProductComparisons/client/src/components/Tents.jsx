import React from "react";
import PeopleAlsoViewed from "./PeopleAlsoViewed";
import CompareAtGlance from "./CompareAtGlance";

const Tents = ({ tents, current, updateState }) => (
  <div>
    <div className="container">
      <div className="titleContainer">
        <h3>People also viewed</h3>
      </div>
      <div className="pplViewedContainer" data-test="dt-comp-people">
        {tents.slice(0, 4).map(item => (
          <PeopleAlsoViewed key={item._id} item={item} />
        ))}
      </div>
    </div>
    <div className="container">
      <div className="titleContainer">
        <h3>Compare at a glance</h3>
      </div>
      <div className="compare-at-glance__container">
        <div className="compare-at-glance__current">
          <CompareAtGlance linkText="Buy Now" item={current[0]} />
        </div>
        <div className="compare-at-glance__suggestions">
          {tents.map(item => (
            <CompareAtGlance
              linkText="View Now"
              key={item._id}
              item={item}
              updateState={updateState}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Tents;
