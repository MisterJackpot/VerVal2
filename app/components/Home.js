// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import ImageWrapperComponent from './ImageWrapperComponent' 
import LoginInputComponent from './LoginInputComponent'
type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} align="center" data-tid="container">
      <ImageWrapperComponent path={"./Assets/federages.png"}/>
      <LoginInputComponent/>
        {/* <Link to={routes.COUNTER}>to Chart</Link> */}
      </div>
    );
  }
}
