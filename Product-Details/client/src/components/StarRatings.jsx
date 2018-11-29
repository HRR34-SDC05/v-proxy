import React from "react";
import StarRatings from "react-star-ratings";

class Star extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: this.props.product.rating
    };
  }

  changeRating(newRating, name) {
    this.setState({
      rating: newRating
    });
  }

  render() {
    return (
      <StarRatings
        rating={this.state.rating}
        starRatedColor="#bd5b0d"
        editing={false}
        numberOfStars={5}
        starDimension="16px"
        starSpacing="0"
        name="rating"
      />
    );
  }
}

export default Star;
