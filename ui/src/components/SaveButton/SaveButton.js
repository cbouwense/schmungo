import React from "react";
import styles from "./SaveButton.css";

export const SaveButton = props => (
  props.enabled && (
    <div className={styles.SaveButtonContainer}>
      <button 
        className={styles.SaveButton}
        onClick={this.handleSubmit}
      >
        Save
      </button>
    </div>
  )
);