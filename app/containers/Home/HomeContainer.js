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

export default class HomeContainer extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      password: '',
    };
  }

  onChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
};

  render() {
    const { password } = this.state;
    return (
      <div className={styles.container} align="center" data-tid="container">
        <ImageWrapperComponent path={'./Assets/target.png'}/>
        <LoginInputComponent 
              label="Password"
              name="password"
              value={password}
              onChange={this.onChange}/>
        <NavigateButtonComponent text="Entrar" navigate={routes.COUNTER} />
      </div>
    );
  }

  props: Props;
}
