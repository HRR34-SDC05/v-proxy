import React from "react";
import styles from "../style.css.js";

const Images = props => (
  <div>
    {props.product.images.map(image => (
      <span className="details-image">
        <img
          style={styles.images}
          src={image.image}
          alt=""
          onMouseOver={e => {
            props.handleChange(e.target);
          }}
          onClick={e => {
            props.handleClick(e.target);
          }}
          img-test="details"
        />
      </span>
    ))}
  </div>
);

export default Images;
