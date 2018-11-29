import React from "react";
import StarRating from "react-star-ratings";

const PeopleAlsoViewed = ({ item }) =>
  !item ? (
    <div>please wait</div>
  ) : (
    <div className="peopleAlsoViewedItem">
      <img className="imgReducedSize" src={item.imageURL} alt="Product" />
      <div>
        <StarRating
          numberOfStars={5}
          rating={item.ranking}
          starRatedColor="#BD5A0E"
          starDimension="15px"
          starSpacing="3px"
        />
        <span className="review">({item.reviews})</span>
      </div>
      <p className="roboto-C">{item.title}</p>
      <p className="roboto">${item.price}</p>
    </div>
  );

export default PeopleAlsoViewed;
