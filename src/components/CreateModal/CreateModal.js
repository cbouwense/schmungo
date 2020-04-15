import React from "react";
import styles from "./CreateModal.css";

export const CreateModal = props => (
  props.open ? (
    <div className={styles.Backdrop} onClick={props.close}>  
      <div className={styles.CreateModal}>
        <div className={styles.ExitContainer}>
          <button
            className={styles.Exit}
            onClick={props.close}
          >
            X
          </button>
        </div>
      </div>
    </div>
   ) : null
);
