import React from "react";
import styles from "../style.css.js";

const Buttons = () => (
  <div className="buttons-wrapper">
    <div className="addToCart-wrapper">
      <input style={styles.cart} type="submit" value="Add to cart" />
    </div>
    <div className="addToWishList-wrapper">
      <input style={styles.wishList} type="submit" value="Add to wish list" />
    </div>
  </div>
);

export default Buttons;
