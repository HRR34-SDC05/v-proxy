import React from "react";
import styles from "../style.css.js";

const Labels = () => (
  <div style={styles.label}>
    <div>
      <input style={styles.radio} type="radio" name="drone" />
      <label>Ship to address</label>
    </div>
    <div>
      <input style={styles.radio} type="radio" name="drone" />
      <label>Pick up in store - Free</label>
    </div>
  </div>
);

export default Labels;
