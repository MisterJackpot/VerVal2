// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import styles from './Home.css';
import ImageWrapperComponent from '../../components/ImageWrapperComponent/ImageWrapperComponent';
import LoginInputComponent from '../../components/LoginInputComponent/LoginInputComponent';
import UploadCsv from '../../components/UploadCsv/UploadCsv';
import NavigateButtonComponent from '../../components/NavigateButtonComponent/NavigateButtonComponent';

type Props = {};

export default class Home extends Component<Props> {

  render() {
    return (
      <div className={styles.container} align="center" data-tid="container">
        <ImageWrapperComponent path={'./Assets/federages.png'}/>
        <LoginInputComponent/>
        <NavigateButtonComponent text="Entrar" navigate={routes.COUNTER} />
      </div>
    );
  }

  props: Props;
}
