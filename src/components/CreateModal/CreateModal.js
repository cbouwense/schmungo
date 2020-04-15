import React, { Component } from "react";
import styles from "./CreateModal.css";

export class CreateModal extends Component {

  state = {
    title: "",
    description: ""
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    });
  }

  render() {
    return this.props.open ? (
      <div className={styles.ModalContainer}>
        <div className={styles.Backdrop} onClick={this.props.close}></div>
        <div className={styles.CreateModal}>
          <div className={styles.ExitContainer}>
            <button
              className={styles.Exit}
              onClick={this.props.close}
            >
              X
            </button>
          </div>
          <h1 className={styles.Heading}>Title</h1>
          <input 
            className={styles.TitleInput}
            type="text"
            onChange={this.handleTitleChange}
            value={this.state.title}
          />
          <h1 className={styles.Heading}>Description</h1>
          <textarea 
            className={styles.DescriptionInput}
            onChange={this.handleDescriptionChange}
            value={this.state.description}
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
  }
}
