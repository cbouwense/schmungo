import React from "react";
import styles from "./CreateModal.css";

//import { Aux } from "../../hoc/Aux/Aux";

export const CreateModal = props => (
  props.open ? (
    <div className={styles.ModalContainer}>
      <div className={styles.Backdrop} onClick={props.close}></div>
      <div className={styles.CreateModal}>
        <div className={styles.ExitContainer}>
          <button
            className={styles.Exit}
            onClick={props.close}
          >
            X
          </button>
        </div>
        <h1 className={styles.Heading}>Title</h1>
        <input 
          className={styles.TitleInput}
          type="text"
        />
        <h1 className={styles.Heading}>Description</h1>
        <input 
          className={styles.DescriptionInput}
          type="text"
        />
        <div className={styles.SaveButtonContainer}>
          <button 
            className={styles.SaveButton}
          >
            Save
          </button>
        </div>
      </div>
    </div>
   ) : null
);
