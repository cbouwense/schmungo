import React from "react";
import styles from "./Header.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as UserActions from "../../actions/user";

import { Aux } from "../../hoc/Aux/Aux";
import { HeaderItem } from "../HeaderItem/HeaderItem";

const ConnectedHeader = props => (
  <header className={styles.Header}>
    <h1 className={styles.Title}>Schmungo</h1>
    <div className={styles.Group}>
      {props.user 
        ? (
          <Aux>
            <HeaderItem title={`Welcome, ${props.user.name}`} />
            <HeaderItem title="Log Out" onClick={props.action.userLogout} /> 
          </Aux>
        )
        : (
          <Aux>
            <HeaderItem title="Sign Up" onClick={props.registerClick} />
            <HeaderItem title="Log In" onClick={props.loginClick} />
          </Aux>
        )
      }
    </div>
  </header>
);

const mapStateToProps = (state) => ({
  user: state.user.user
});

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(UserActions, dispatch)
})

export const Header = connect(mapStateToProps, mapDispatchToProps)(ConnectedHeader);