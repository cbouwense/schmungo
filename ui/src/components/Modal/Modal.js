import React from "react";
import styles from "./Modal.css";

export const Modal = props => (
  props.open ? (
    <div className={styles.ModalContainer}>
      <div className={styles.Backdrop} onClick={props.close}></div>
      <div className={styles.Modal}>
        <div className={styles.ExitContainer}>
          <button
            className={styles.Exit}
            onClick={props.close}
          >
            X
          </button>
        </div>
        {props.children}
      </div>
    </div>
    ) : null
);
